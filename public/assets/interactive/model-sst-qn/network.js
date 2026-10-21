(() => {
  'use strict';
  const container = document.getElementById('network');
  const message = document.getElementById('chart-message');
  const data = JSON.parse(document.getElementById('network-data').textContent);
  const core = new Set([3, 9, 12]);
  const icons = new Map();
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const signed = (value, digits = 3) => `${value > 0 ? '+' : ''}${value.toFixed(digits)}`;
  const iconPath = node => node.iconData;
  let chart;
  let visibleNodes = [];
  let visibleEdges = [];
  let mobile = false;
  let resizeTimer;
  const colours = { positive: '#59766f', negative: '#9b5d7d' };
  const curves = { E03_09:0.24, E09_03:0.24, E03_04:0.22, E04_03:0.22, E09_12:0.24, E12_09:0.24, E17_09:0, E17_03:-0.13, E17_12:-0.17, E17_04:0.18, E09_04:-0.60, E04_05:0.65, E03_01:0.30, E03_08:0.18, E09_08:0.15, E03_10:0.10, E09_10:0.02, E12_13:0, E09_14:0.04, E09_15:-0.1 };

  // Leave a transparent gutter so graph arrowheads remain visible above the links.
  async function makeIcon(node) {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = node.iconData;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const inset = 11;
    // Clip the artwork and backing together so all four corners stay smooth.
    // Keep the transparent gutter for arrowheads at the logo boundary.
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(inset, inset, 256-inset*2, 256-inset*2, 26);
    ctx.clip();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(inset, inset, 256-inset*2, 256-inset*2);
    ctx.drawImage(image, inset, inset, 256-inset*2, 256-inset*2);
    ctx.restore();
    icons.set(node.id, canvas.toDataURL('image/png'));
  }

  function row(label, value, tone = '') {
    return `<div class="tip-row"><span class="tip-label">${escape(label)}</span><span class="tip-value ${tone}">${escape(value)}</span></div>`;
  }
  function tooltip(params) {
    if (params.dataType === 'edge') {
      const edge = params.data.record;
      const tone = edge.b > 0 ? 'positive' : 'negative';
      return `<div class="network-tip"><div class="tip-head"><div><span class="tip-kicker">${escape(edge.id)}</span><strong class="tip-title">SDG ${edge.source} &rarr; SDG ${edge.target}</strong></div></div>${row('Relationship', edge.b > 0 ? 'Positive' : 'Negative', tone)}${row('Coefficient b', signed(edge.b), tone)}${row('Context score C', signed(edge.C, 2))}${row('Applicability', edge.tau.toFixed(2))}<p class="tip-condition">${escape(edge.condition.replaceAll('_', ' ').replaceAll('|', '; '))}</p></div>`;
    }
    const node = params.data.record;
    const incoming = data.edges.filter(edge => edge.target === node.id).length;
    const outgoing = data.edges.filter(edge => edge.source === node.id).length;
    return `<div class="network-tip"><div class="tip-head"><img src="${iconPath(node)}" alt=""><div><span class="tip-kicker">SDG ${node.id}</span><strong class="tip-title">${escape(node.name)}</strong></div></div>${row('Direct score D', node.direct > 0 ? node.direct.toFixed(3) : 'No direct score')}${row('Incoming relations', incoming)}${row('Outgoing relations', outgoing)}</div>`;
  }

  function buildOption() {
    mobile = container.clientWidth < 560;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const routeCurves = width < 360
      ? {...curves, E03_09:0, E09_03:0.15, E17_03:0.25, E17_12:-0.15, E17_04:0.2, E09_04:0.25, E03_04:0.2, E04_03:0.2, E03_08:0.2, E09_08:0.05, E03_10:0.95, E09_10:0, E09_12:0, E12_09:-0.15, E09_14:0, E09_15:0}
      : mobile ? {...curves, E09_04:-0.95, E09_08:-0.08, E03_10:0.25, E09_15:0.22} : curves;
    visibleNodes = data.nodes;
    const ids = new Set(visibleNodes.map(node => node.id));
    visibleEdges = data.edges.filter(edge => ids.has(edge.source) && ids.has(edge.target));
    const graphNodes = visibleNodes.map(node => ({
      id:String(node.id), name:`SDG ${node.id}`, value:node.direct, record:node,
      x:node.position[0], y:122-node.position[1],
      category:node.direct > 0 ? 0 : 1,
      symbol:`image://${icons.get(node.id)}`,
      symbolSize:mobile ? (core.has(node.id) ? 68 : 48) * 1.04 : (core.has(node.id) ? 116 : node.direct > 0 ? 94 : 80) * Math.min(1, width / 1100) * 1.04,
    }));
    // The coordinate bounds stay fixed when categories are filtered.
    const left = mobile ? 38 : 110;
    const right = width - left;
    const top = mobile ? 52 : 60;
    const bottom = height - (mobile ? 58 : 60);
    const graphWidth = right-left, graphHeight = bottom-top;
    const allX = data.nodes.map(node => node.position[0]);
    const allY = data.nodes.map(node => 122-node.position[1]);
    const xMin = Math.min(...allX), xMax = Math.max(...allX);
    const yMin = Math.min(...allY), yMax = Math.max(...allY);
    const subsetX = graphNodes.map(node => node.x), subsetY = graphNodes.map(node => node.y);
    const actualLeft = graphNodes.length ? left+(Math.min(...subsetX)-xMin)/(xMax-xMin)*graphWidth : left;
    const actualRight = graphNodes.length ? width-left-(Math.max(...subsetX)-xMin)/(xMax-xMin)*graphWidth : left;
    const actualTop = graphNodes.length ? top+(Math.min(...subsetY)-yMin)/(yMax-yMin)*graphHeight : top;
    const actualBottom = graphNodes.length ? height-top-(Math.max(...subsetY)-yMin)/(yMax-yMin)*graphHeight : top;
    // Match data units to screen units so circular symbols remain round.
    graphNodes.forEach(node => {
      node.x=left+(node.x-xMin)/(xMax-xMin)*graphWidth;
      node.y=top+(node.y-yMin)/(yMax-yMin)*graphHeight;
    });
    return {
      backgroundColor:'transparent', animation:false,
      textStyle:{fontFamily:'Lexend, Arial, sans-serif'},
      tooltip:{show:true,trigger:'item',triggerOn:'mousemove|click',confine:true,transitionDuration:0,hideDelay:80,backgroundColor:'#fff',borderColor:'#dce5e7',borderWidth:1,padding:13,extraCssText:'max-width:calc(100% - 20px);border-radius:6px;box-shadow:0 7px 24px rgba(38,55,58,.12);',formatter:tooltip},
      series:[{id:'sdg-network',name:'Enabled SST-QN network',type:'graph',layout:'none',
        left:actualLeft,right:actualRight,top:actualTop,bottom:actualBottom,
        roam:true,draggable:true,scaleLimit:{min:0.55,max:2.8},zoom:1,center:null,
        nodeScaleRatio:0.6,legendHoverLink:false,
        categories:[{name:'Direct evidence'},{name:'No direct score'}],
        data:graphNodes,
        links:visibleEdges.map(edge => ({id:edge.id,source:String(edge.source),target:String(edge.target),value:edge.b,record:edge,
          lineStyle:{color:edge.b>0?colours.positive:colours.negative,width:1.15+Math.abs(edge.b)*8,opacity:0.76,type:edge.b>0?'solid':'dashed',curveness:routeCurves[edge.id]||0},
          symbol:['none','arrow'],symbolSize:[0,mobile?6:8],
        })),
        label:{show:false},
        lineStyle:{cap:'round'},
        emphasis:{focus:'adjacency',scale:1.08,label:{show:false},lineStyle:{width:3.5,opacity:1}},
        blur:{itemStyle:{opacity:0.16},lineStyle:{opacity:0.07},label:{show:false}},
      }],
    };
  }
  function zoomLabel() {
    const value = chart.getOption().series[0].zoom || 1;
    document.getElementById('zoom-value').textContent = `${Math.round(value*100)}%`;
    document.getElementById('zoom-out').disabled = value <= 0.55;
    document.getElementById('zoom-in').disabled = value >= 2.8;
  }
  function clearDetails() {
    chart.dispatchAction({type:'hideTip'});
    chart.dispatchAction({type:'downplay',seriesIndex:0});
    chart.dispatchAction({type:'downplay',seriesIndex:0,dataType:'edge'});
  }
  function raiseArrows() {
    // Native graph nodes use z2:100. Keep strokes behind the logos and raise
    // only arrowheads above them, including during emphasis/selection.
    // Retaining the original elements preserves drag/roam, hit testing and PNG export.
    chart.getModel().getSeriesByIndex(0).getEdgeData().eachItemGraphicEl(group => {
      for (const [name, layer] of [['line',0],['fromSymbol',300],['toSymbol',300]]) {
        const shape = group.childOfName(name);
        if (!shape) continue;
        shape.attr({z2:layer});
        shape.ensureState('emphasis').z2 = layer+10;
        shape.ensureState('select').z2 = layer+10;
        shape.ensureState('blur').z2 = layer;
      }
    });
  }
  function keyboardTargets() {
    const list = document.getElementById('keyboard-targets');
    list.replaceChildren();
    for (const type of ['node','edge']) {
      const items = type === 'node' ? visibleNodes : visibleEdges;
      items.forEach((item,index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = type === 'node' ? `SDG ${item.id}: ${item.name}` : `SDG ${item.source} to SDG ${item.target}: ${signed(item.b)}`;
        button.dataset.detailType = type; button.dataset.detailId = item.id;
        button.addEventListener('focus',() => {
          document.getElementById('network-detail-output').innerHTML = tooltip({
            dataType:type, data:{record:item}
          });
          clearDetails();
          chart.dispatchAction({type:'highlight',seriesIndex:0,dataType:type,dataIndex:index});
          if(type==='node') {
            chart.dispatchAction({type:'showTip',seriesIndex:0,dataIndex:index});
          } else {
            const group=chart.getModel().getSeriesByIndex(0).getEdgeData().getItemGraphicEl(index);
            const line=group.childAt(0);
            for(const fraction of [.5,.35,.65,.2,.8]) {
              const local=line.pointAt(fraction);
              const point=line.transformCoordToGlobal(local[0],local[1]);
              let target=chart.getZr().handler.findHover(point[0],point[1]).target;
              while(target && target!==group)target=target.parent;
              if(target===group) {chart.dispatchAction({type:'showTip',x:point[0],y:point[1]});break;}
            }
          }
        });
        button.addEventListener('blur',clearDetails);
        list.append(button);
      });
    }
  }
  function draw() {
    chart.setOption(buildOption(),true);
    raiseArrows();
    document.getElementById('network-count').textContent=`${visibleNodes.length} SDGs / ${visibleEdges.length} directed relationships`;
    message.hidden = visibleNodes.length > 0;
    message.textContent = 'No categories selected';
    keyboardTargets(); zoomLabel();
  }
  async function start() {
    if (!window.echarts) throw new Error('The bundled chart library could not be loaded.');
    await Promise.all(data.nodes.map(makeIcon));
    chart = echarts.init(container,null,{renderer:'canvas',devicePixelRatio:Math.min(devicePixelRatio||1,2)});
    draw();
    chart.on('graphRoam',zoomLabel);
    for (const [id,factor] of [['zoom-in',1.2],['zoom-out',1/1.2]]) {
      document.getElementById(id).addEventListener('click',() => { const zoom=Math.max(.55,Math.min(2.8,(chart.getOption().series[0].zoom||1)*factor));chart.setOption({series:[{id:'sdg-network',zoom}]});raiseArrows();clearDetails();zoomLabel(); });
    }
    document.getElementById('reset-view').addEventListener('click',draw);
    document.getElementById('save-image').addEventListener('click',() => {
      clearDetails();
      // Let ECharts finish clearing hover/keyboard emphasis before taking the image.
      requestAnimationFrame(() => {
        const anchor=document.createElement('a');
        anchor.download='Figure50-SST-QN-network.png';
        anchor.href=chart.getDataURL({type:'png',pixelRatio:2,backgroundColor:'#fff'});
        anchor.click();
      });
    });
    document.addEventListener('keydown',event=>{if(event.key==='Escape')clearDetails();});
    new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{chart.resize();draw();},100);}).observe(container);
    if(window.lucide)lucide.createIcons();
    container.dataset.ready='true';
  }
  start().catch(error=>{message.hidden=false;message.textContent=`Unable to load network: ${error.message}`;console.error(error);});
})();

(() => {
  const root = document.querySelector('main');
  const report = () => window.parent.postMessage({
    type: 'model-sdg-network-size', height: Math.ceil(root.getBoundingClientRect().height)
  }, window.location.origin);
  new ResizeObserver(report).observe(root);
  document.fonts.ready.then(report);
  window.addEventListener('load', report);
})();
