/* CirCure SDG bubble component. No framework or external dependency required. */
(() => {
  'use strict';
  const DEFAULT_DATA = [];
  const COLORS = {1:'#E5243B',3:'#4C9F38',4:'#C5192D',5:'#FF3A21',8:'#A21942',9:'#FD6925',10:'#DD1367',12:'#BF8B2E',13:'#3F7E44',14:'#0A97D9',15:'#56C02B',17:'#19486A'};
  const METRICS = [
    {key:'direct',label:'Direct',long:'Direct contribution',y:132},
    {key:'one',label:'One-step',long:'One-step contribution',y:272},
    {key:'multi',label:'Multi-step',long:'Multi-step contribution',y:412},
    {key:'total',label:'Composite',long:'Composite scenario index',y:572},
  ];
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const CSS = `
    :host{display:block;max-width:100%;color:var(--sdg-ink,#30363b);font-family:var(--sdg-font,Arial,Helvetica,sans-serif);font-size:14px;line-height:1.5}
    *,*::before,*::after{box-sizing:border-box}.component{width:100%;background:var(--sdg-background,transparent)}
    .canvas{min-width:1200px}
    .key{display:flex;align-items:baseline;justify-content:center;gap:24px;margin:10px 22px 0;padding:14px 0 0;border-top:1px solid var(--sdg-rule,#e9edf0);color:var(--sdg-ink,#30363b);white-space:nowrap}
    .key h2{margin:0;font-size:13px;line-height:1.5;font-weight:600;letter-spacing:0}
    .key dl{display:flex;gap:22px;margin:0;font-size:12px;line-height:1.5}
    .key .band{display:flex;gap:8px}.key dt,.key dd{margin:0}.key dd{color:var(--sdg-muted,#747c82)}
    .scroll{width:100%;overflow-x:auto;overscroll-behavior-inline:contain;scrollbar-width:thin}
    svg{display:block;width:100%;height:auto;font-family:inherit;overflow:visible}
    .guide{stroke:var(--sdg-rule,#e9edf0);stroke-width:1}.separator{stroke:#d5dadf;stroke-width:1}
    .heading{font-size:20px;font-weight:600;text-anchor:middle}.metric{font-size:22px;fill:var(--sdg-ink,#30363b)}
    .value{font-size:19px;text-anchor:middle;font-variant-numeric:tabular-nums;fill:var(--sdg-ink,#30363b)}
    .total .value,.metric-total{font-weight:600}.zero .value{fill:#aab1b7}.cell{cursor:help;outline:none}.hit{fill:transparent}
    .focus-ring{fill:none;stroke:var(--sdg-color);stroke-width:1.7;opacity:0}.cell:hover .focus-ring,.cell:focus-visible .focus-ring{opacity:.65}
  `;
  const TOOLTIP_CSS = `
    :host{all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;font-family:Arial,Helvetica,sans-serif}
    .tooltip{position:fixed;left:0;top:0;box-sizing:border-box;inline-size:max-content;max-inline-size:min(330px,calc(100vw - 16px));max-block-size:calc(100vh - 16px);overflow:auto;padding:12px 14px;background:#fff;color:#30363b;border:1px solid #dce1e5;border-radius:6px;box-shadow:0 5px 22px #1d2b3b18;font-size:13px;line-height:1.55;text-align:left;white-space:normal;overflow-wrap:anywhere;word-break:normal;hyphens:auto;pointer-events:none;visibility:hidden}
    .tooltip[data-visible="true"]{visibility:visible}.title{display:block;margin:0 0 5px;padding-left:10px;border-left:3px solid var(--sdg-color);font-size:13px;font-weight:600;line-height:1.5;white-space:normal;overflow-wrap:anywhere}
    .metric{display:block;margin:0 0 6px;font-size:14px;font-weight:600}.text{margin:0}.detail{margin:7px 0 0;color:#68727a;font-size:12px;line-height:1.5}
  `;

  function svgElement(tag,attributes={},content='') {
    const node=document.createElementNS(SVG_NS,tag);
    Object.entries(attributes).forEach(([key,value])=>node.setAttribute(key,String(value)));
    if(content!=='')node.textContent=content;
    return node;
  }
  const number=value=>Math.abs(value)<1e-12?'0.000':`${value<0?'−':''}${Math.abs(value).toFixed(3)}`;
  function band(value){return value===0?'No current direct contribution':value<1?'Weak stage contribution':value<2?'Moderate stage contribution':'Strong stage contribution';}
  function explanation(row,metric){
    const value=row[metric.key];
    let text,detail='';
    if(metric.key==='direct') {
      text=value===0?'No current direct contribution is assigned in this evaluation. Future network effects may still be positive or negative.':`Current-stage contribution evidence, scored from 0 to 3. ${band(value)}.`;
      detail='The score describes stage-specific evidence, not realized SDG attainment.';
    } else if(metric.key==='one') {
      text=value===0?'No eligible one-step response is generated in this registered scenario. Zero does not establish that no real-world relationship exists.':'Conditional network-response index transmitted through one SDG relationship.';
      detail='Assumes the future-development conditions registered in this scenario.';
    } else if(metric.key==='multi') {
      text=value===0?'No eligible response through paths of two or three relationships is generated in this registered scenario.':'Conditional network-response index through paths of two or three SDG relationships.';
      detail='Path length describes relationships, not years. Future-development conditions apply.';
    } else {
      text=`Direct ${number(row.direct)} + one-step ${number(row.one)} + multi-step ${number(row.multi)}, calculated before rounding.`;
      detail='This scenario index may exceed 3. It is not an SDG completion percentage or a measured net benefit.';
    }
    if((row.sdg===14||row.sdg===15)&&value<0)detail='The negative value comes from the residual ecological-risk stress-test assumption, not observed environmental damage.';
    return {text,detail};
  }

  class SDGContributionBubbles extends HTMLElement {
    constructor(){
      super();this.attachShadow({mode:'open'});this._data=DEFAULT_DATA.map(r=>({...r}));this._frame=0;this._active=null;this._lastPoint=null;
      this._hide=()=>this.hideTooltip();
      this._outside=event=>{if(!event.composedPath().includes(this))this.hideTooltip();};
      this._escape=event=>{if(event.key==='Escape')this.hideTooltip();};
    }
    connectedCallback(){
      this.render();this.createTooltip();
      window.addEventListener('scroll',this._hide,true);window.addEventListener('resize',this._hide);
      document.addEventListener('pointerdown',this._outside);document.addEventListener('keydown',this._escape);
    }
    disconnectedCallback(){
      cancelAnimationFrame(this._frame);this._portal?.remove();this._portal=null;
      window.removeEventListener('scroll',this._hide,true);window.removeEventListener('resize',this._hide);
      document.removeEventListener('pointerdown',this._outside);document.removeEventListener('keydown',this._escape);
    }
    get data(){return this._data.map(row=>({...row}));}
    set data(rows){
      if(!Array.isArray(rows)||rows.length!==12)throw new TypeError('Provide 12 SDG rows.');
      const seen=new Set();
      for(const row of rows){
        if(!Number.isInteger(row.sdg)||seen.has(row.sdg)||!COLORS[row.sdg]||typeof row.name!=='string')throw new TypeError('Invalid SDG row.');
        seen.add(row.sdg);
        if(!METRICS.every(m=>typeof row[m.key]==='number'&&Number.isFinite(row[m.key])))throw new TypeError('Every contribution must be a finite number.');
        if(row.direct<0||row.direct>3)throw new RangeError('Direct contribution must be within 0–3.');
      }
      this._data=rows.map(r=>({...r}));this.hideTooltip();if(this.isConnected)this.render();
    }
    createTooltip(){
      this._portal?.remove();
      const portal=document.createElement('div');portal.setAttribute('data-sdg-tooltip-portal','');
      const root=portal.attachShadow({mode:'open'}),style=document.createElement('style');style.textContent=TOOLTIP_CSS;
      const tip=document.createElement('div');tip.className='tooltip';tip.id='sdg-tooltip';tip.setAttribute('role','tooltip');tip.setAttribute('aria-hidden','true');tip.dataset.placement='top-left';
      for(const tag of ['title','metric','text','detail']){const child=document.createElement(tag==='title'?'strong':tag==='metric'?'span':'p');child.className=tag;tip.append(child);}
      root.append(style,tip);document.body.append(portal);this._portal=portal;this._tip=tip;
    }
    render(){
      const root=this.shadowRoot;root.innerHTML='';
      const style=document.createElement('style');style.textContent=CSS;
      const wrapper=document.createElement('div');wrapper.className='component';
      const key=document.createElement('aside');key.className='key';key.setAttribute('aria-label','Direct contribution scoring standard');
      key.innerHTML='<h2>Direct contribution (0–3)</h2><dl><div class="band"><dt>0</dt><dd>No current direct contribution</dd></div><div class="band"><dt>0 &lt; D &lt; 1</dt><dd>Weak stage contribution</dd></div><div class="band"><dt>1 ≤ D &lt; 2</dt><dd>Moderate stage contribution</dd></div><div class="band"><dt>2 ≤ D ≤ 3</dt><dd>Strong stage contribution</dd></div></dl>';
      const scroll=document.createElement('div');scroll.className='scroll';
      const svg=svgElement('svg',{viewBox:'0 0 1680 654',role:'group','aria-label':'Contributions across 12 Sustainable Development Goals'});
      const xs=this._data.map((r,i)=>264+i*120.5);
      this._data.forEach((row,i)=>svg.append(svgElement('text',{class:'heading',x:xs[i],y:35,fill:COLORS[row.sdg]},`SDG ${row.sdg}`)));
      for(const metric of METRICS){
        svg.append(svgElement('line',{class:'guide',x1:208,x2:1642,y1:metric.y,y2:metric.y}));
        svg.append(svgElement('text',{class:`metric${metric.key==='total'?' metric-total':''}`,x:22,y:metric.y+7},metric.label));
        this._data.forEach((row,i)=>{
          const value=row[metric.key],radius=17.5*Math.sqrt(Math.abs(value)),copy=explanation(row,metric);
          const cell=svgElement('g',{class:`cell ${metric.key==='total'?'total ':''}${value===0?'zero':''}`,tabindex:'0',role:'button','aria-label':`SDG ${row.sdg}, ${row.name}. ${metric.long}: ${number(value)}. ${copy.text} ${copy.detail}`,'data-sdg':row.sdg,'data-metric':metric.key,'data-value':value,style:`--sdg-color:${COLORS[row.sdg]}`});
          cell.append(svgElement('rect',{class:'hit',x:xs[i]-48,y:metric.y-42,width:96,height:104}));
          if(value!==0)cell.append(svgElement('circle',{class:'bubble',cx:xs[i],cy:metric.y,r:radius,fill:COLORS[row.sdg]}));
          cell.append(svgElement('circle',{class:'focus-ring',cx:xs[i],cy:metric.y,r:Math.max(radius+6,14)}));
          cell.append(svgElement('text',{class:'value',x:xs[i],y:metric.y+52},number(value)));
          cell.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')this.showTooltip(cell,row,metric,e.clientX,e.clientY);});
          cell.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')this.moveTooltip(e.clientX,e.clientY);});
          cell.addEventListener('pointerleave',()=>this.hideTooltip());
          cell.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')this.showTooltip(cell,row,metric,e.clientX,e.clientY);});
          cell.addEventListener('focus',()=>{const box=cell.getBoundingClientRect();this.showTooltip(cell,row,metric,box.left+box.width/2,box.top+box.height/2);});
          cell.addEventListener('blur',()=>this.hideTooltip());
          cell.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();const b=cell.getBoundingClientRect();this.showTooltip(cell,row,metric,b.left+b.width/2,b.top+b.height/2);}});
          svg.append(cell);
        });
      }
      svg.append(svgElement('line',{class:'separator',x1:22,x2:1642,y1:505,y2:505}));
      const canvas=document.createElement('div');canvas.className='canvas';canvas.append(svg,key);
      scroll.addEventListener('scroll',()=>this.hideTooltip(),{passive:true});scroll.append(canvas);wrapper.append(scroll);root.append(style,wrapper);
    }
    showTooltip(cell,row,metric,x,y){
      if(!this._tip)this.createTooltip();
      this._active=cell;const copy=explanation(row,metric),tip=this._tip;
      tip.style.setProperty('--sdg-color',COLORS[row.sdg]);
      tip.querySelector('.title').textContent=`SDG ${row.sdg} · ${row.name}`;
      tip.querySelector('.metric').textContent=`${metric.long}: ${number(row[metric.key])}${metric.key==='direct'?' / 3':''}`;
      tip.querySelector('.text').textContent=copy.text;tip.querySelector('.detail').textContent=copy.detail;
      tip.setAttribute('aria-hidden','false');this._placeTooltip(x,y);tip.dataset.visible='true';
    }
    moveTooltip(x,y){
      if(!this._active)return;this._lastPoint={x,y};
      if(!this._frame)this._frame=requestAnimationFrame(()=>{this._frame=0;const point=this._lastPoint;if(this._active&&point)this._placeTooltip(point.x,point.y);});
    }
    _placeTooltip(x,y){
      const gap=14,pad=8,tip=this._tip;
      tip.style.maxInlineSize=`${Math.min(330,window.innerWidth-pad*2,Math.max(170,x-gap-pad))}px`;
      const bounds=tip.getBoundingClientRect();
      const left=Math.max(pad,Math.min(x-bounds.width-gap,window.innerWidth-bounds.width-pad));
      const top=Math.max(pad,Math.min(y-bounds.height-gap,window.innerHeight-bounds.height-pad));
      tip.style.transform=`translate3d(${Math.round(left)}px,${Math.round(top)}px,0)`;
      tip.dataset.cursorX=String(x);tip.dataset.cursorY=String(y);
    }
    hideTooltip(){
      cancelAnimationFrame(this._frame);this._frame=0;this._active=null;this._lastPoint=null;
      if(this._tip){delete this._tip.dataset.visible;this._tip.setAttribute('aria-hidden','true');}
    }
  }
  if(!customElements.get('sdg-contribution-bubbles'))customElements.define('sdg-contribution-bubbles',SDGContributionBubbles);
})();
