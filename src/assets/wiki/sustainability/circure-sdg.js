/* One complete SDG section per page. Original icons and text remain intact. */
(() => {
  'use strict';
  if (customElements.get('circure-sdg-explorer')) return;
  const GOALS = [
  {
    "id": 1,
    "title": "No Poverty",
    "headings": [
      "SDG 1 — No Poverty",
      "What Evidence Leads Us Here?",
      "Potential Impact & Interactions",
      "What Still Needs to Be Proven?"
    ],
    "original": [
      [
        "SDG 1, No Poverty, aims to end poverty in all its forms. For biomedical innovation, disease can affect household finances through treatment expenses, long-term care, and lost work, as well as affecting patients’ health. A technology’s long-term value therefore also depends on whether it can improve health without increasing the financial burden on patients and their families."
      ],
      [
        "Feedback from patients with TNBC and their family members showed us that the burden of cancer extends beyond treatment expenses. Interruptions to work, lost income, and family caregiving can affect the entire household. Discussions about basic medical insurance and commercial insurance further highlighted the role of reimbursement policies, coverage, and patients’ out-of-pocket share.",
        "These findings prompted us to ask whether CirCure’s potential health value could eventually help reduce the long-term financial pressure that cancer places on families."
      ],
      [
        "If CirCure can reduce recurrence risk or extend disease control, patients may face less financial pressure from repeated treatment, interruptions to work, and long-term care. This could create a potential synergy between the health value associated with SDG 3 and SDG 1.",
        "However, circRNA vaccine development, production, quality control, storage, and transport may involve substantial costs. Without appropriate pricing and payment coverage, the technology could increase household financial burdens and create trade-offs with the equitable access addressed by SDG 10."
      ],
      [
        "CirCure currently has no clinical or pharmacoeconomic evidence demonstrating that it can reduce patients’ long-term medical expenses or household financial burdens.",
        "Future evaluation will need to consider recurrence and disease control, treatment expenditure, income lost through interruptions to work, family caregiving costs, and patients’ actual financial burden. Until these data are available, SDG 1 represents a potential long-term impact pathway."
      ]
    ],
    "color": "#e5243b",
    "tint": "#fce8e9",
    "icon": "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg-01.avif"
  },
  {
    "id": 5,
    "title": "Gender Equality",
    "headings": [
      "SDG 5 — Gender Equality",
      "What Evidence Leads Us Here?",
      "Potential Impact & Interactions",
      "What Still Needs to Be Proven?"
    ],
    "original": [
      [
        "SDG 5, Gender Equality, aims to achieve gender equality and empower all women and girls. For CirCure, which focuses on breast cancer and women’s health, improving health alone does not establish progress toward gender equality. We also need to consider whether women have equitable access to health information and healthcare resources, along with opportunities to express their needs and participate in decisions about their own health."
      ],
      [
        "Feedback from Shujuan Yang on women’s health and disease prevention prompted us to incorporate breast health, screening, and early detection into public education. We subsequently organized the Pink Care public education activity and developed the Breast Guardian story-based game, aiming to improve access to reliable health information and encourage proactive attention to health.",
        "These activities led us to consider whether women’s health education could, over time, support women in expressing their health needs and participating in health decisions."
      ],
      [
        "If these educational activities reach women from different backgrounds and strengthen their access to health information and participation in health decisions, our work under SDG 3 and SDG 4 could contribute to synergies with SDG 5.",
        "However, if activities primarily reach people who already have ready access to information and healthcare, their impact may be limited and could involve trade-offs with SDG 10. Improvements in women’s health also do not, by themselves, demonstrate changes in structural gender inequality."
      ],
      [
        "Current evidence shows that CirCure has delivered women’s health education and public science communication. It does not yet demonstrate that these activities have reduced inequalities in women’s access to health resources or participation in health decisions.",
        "Future evaluation will need to examine reach across different groups of women, changes in knowledge, willingness to undergo screening, and participation in health decisions. These findings will help determine whether the activities improve equity in access to information, resources, and opportunities to participate."
      ]
    ],
    "color": "#ff3a21",
    "tint": "#fbe8e1",
    "icon": "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg-05.avif"
  },
  {
    "id": 8,
    "title": "Decent Work and Economic Growth",
    "headings": [
      "SDG 8 — Decent Work and Economic Growth",
      "What Evidence Leads Us Here?",
      "Potential Impact & Interactions",
      "What Still Needs to Be Proven?"
    ],
    "original": [
      [
        "SDG 8, Decent Work and Economic Growth, aims to promote sustained, inclusive, and sustainable economic growth and full and productive employment. For biomedical innovation, translating a technology from the laboratory into practical use may create industrial and economic value. This value depends on production efficiency, costs, employment opportunities, and the long-term sustainability of industrial development, as well as the feasibility of translation at scale."
      ],
      [
        "Our visit to a medical device innovation company in Shanghai’s Lingang New Area prompted us to distinguish technical feasibility from readiness for practical use. We incorporated stable production, quality control, scale-up, and conditions of use into our considerations for future development.",
        "Discussions with Hualan Biological further encouraged us to examine product positioning, development priorities, markets, costs, intellectual property, industry collaboration, and development risks in our Entrepreneurship analysis. These activities informed CirCure’s early product and business planning, but have not generated economic returns."
      ],
      [
        "If CirCure completes product development and achieves stable production, its technology could provide a basis for new products and generate demand for process development, quality control, and industry collaboration. Innovation under SDG 9 could thereby support economic activity under SDG 8.",
        "However, clinical development, production at scale, quality control, and cold-chain storage and transport require sustained investment. High costs could affect market adoption and patient accessibility, with potential trade-offs involving SDG 10, SDG 12, and SDG 13."
      ],
      [
        "CirCure has not entered production at scale and has no data on market adoption, economic returns, or employment. We therefore cannot claim that the project has already supported economic growth or created decent work.",
        "Even if it eventually generates demand for research, production, quality management, or industry collaboration, job numbers alone would not establish a contribution to decent work. Employment opportunities, working conditions, occupational safety, and opportunities for professional development would also need to be evaluated.",
        "Future data on production costs, market adoption, industry collaboration, economic returns, and employment quality will be needed to determine whether technological innovation translates into sustainable industrial and economic value."
      ]
    ],
    "color": "#a21942",
    "tint": "#f5e5eb",
    "icon": "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg-08.avif"
  },
  {
    "id": 10,
    "title": "Reduced Inequalities",
    "headings": [
      "SDG 10 — Reduced Inequalities",
      "What Evidence Leads Us Here?",
      "Potential Impact & Interactions",
      "What Still Needs to Be Proven?"
    ],
    "original": [
      [
        "SDG 10, Reduced Inequalities, aims to reduce inequality within and among countries. For innovative medical technologies, the availability of a treatment does not mean that all patients can benefit equally. Its value also depends on whether treatment costs, payment coverage, healthcare resources, and practical accessibility allow patients from different backgrounds to benefit."
      ],
      [
        "Feedback from patients and family members helped us recognize that even an effective treatment may not benefit all patients equally. Jianguo Wang’s feedback on health insurance payment and reimbursement mechanisms further showed that patients’ actual financial burden depends not only on treatment prices, but also on insurance coverage, reimbursement conditions, and the proportion they must pay out of pocket.",
        "Jing Wen, a commercial health insurance professional, explained that commercial insurance can provide supplementary coverage for some eligible patients, but cannot cover everyone. Lei Wang broadened our focus from whether patients could afford treatment to whether they could actually access it: regional healthcare resources, service capacity, and opportunities to receive care also shape treatment accessibility."
      ],
      [
        "If CirCure can demonstrate efficacy and safety while controlling costs and fitting within feasible payment and healthcare delivery arrangements, the health value associated with SDG 3 and the technological innovation associated with SDG 9 could translate into more equitable treatment opportunities.",
        "However, complex circRNA and LNP production, quality control, and cold-chain storage and transport could also increase treatment costs and implementation requirements. The technology might therefore initially reach patients with greater financial means or better access to healthcare resources. We classify both SDG 3 ↔ SDG 10 and SDG 9 ↔ SDG 10 as Conditional relationships: whether they ultimately produce synergies or trade-offs depends on prices, payment coverage, regional resources, and actual implementation conditions."
      ],
      [
        "CirCure currently has no data on product pricing, health insurance coverage, patients’ out-of-pocket costs, or actual treatment coverage. We therefore cannot claim that the project has already improved health equity.",
        "Future evaluation will need to examine treatment costs and pricing, basic medical insurance and commercial insurance coverage, the actual financial burden on different patient groups, regional healthcare resources, and whether patients can obtain treatment in practice. These data will help determine whether CirCure ultimately narrows or widens health disparities."
      ]
    ],
    "color": "#dd1367",
    "tint": "#fbe4ed",
    "icon": "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg-10.avif"
  },
  {
    "id": 13,
    "title": "Climate Action",
    "headings": [
      "SDG 13 — Climate Action",
      "What Evidence Leads Us Here?",
      "Potential Impact & Interactions",
      "What Still Needs to Be Proven?"
    ],
    "original": [
      [
        "SDG 13, Climate Action, calls for urgent action to combat climate change and its impacts. For biomedical innovation, future production at scale may create additional material, energy, and transport demands. Environmental responsibility therefore requires attention to both resource efficiency and the carbon emissions and climate impacts that may arise throughout the product lifecycle, including production, storage, transport, and waste treatment."
      ],
      [
        "Discussions with companies involved in carbon emissions management helped us recognize that the environmental impact of a medical technology cannot be assessed solely through laboratory reagents and consumables. Raw materials, production at scale, packaging, storage, transport, and waste treatment also need to be considered.",
        "SAIC Motor’s green manufacturing practices further encouraged us to examine CirCure from a lifecycle perspective. Discussions with Shanghai Lingang New Area Cross-Border Data Technology Co., Ltd. also highlighted that future environmental improvements would need to be verified using continuous, comparable production and supply chain data. We therefore expanded our assessment from current laboratory resource use to the full lifecycle of a potential future product."
      ],
      [
        "If CirCure can improve process stability and reduce failed batches and repeated production, the resource efficiency addressed by SDG 12 could support synergies with SDG 13 by reducing the material and energy inputs required per unit of usable product.",
        "However, circRNA and LNP production at scale, equipment operation, low-temperature storage, and cold-chain transport could also increase energy demand and carbon emissions. Improvements in individual production steps do not necessarily reduce the overall environmental burden. The direction of the relationship between SDG 12 and SDG 13 therefore depends on process efficiency, energy sources, storage and transport methods, and additional resource demands across the full lifecycle."
      ],
      [
        "CirCure has not entered production at scale, and we currently lack actual data on production and transport energy use, carbon emissions, and lifecycle impacts. We therefore cannot claim that the project has already reduced carbon emissions.",
        "Future work will need to record energy use per unit of product, raw material inputs, batch failure rates, storage and cold-chain requirements, transport methods, and waste treatment. Once sufficient data are available, carbon footprint or lifecycle assessments will be needed to determine whether improvements in individual processes translate into overall climate benefits."
      ]
    ],
    "color": "#3f7e44",
    "tint": "#e9f1e4",
    "icon": "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg-13.avif"
  }
];
  const CSS = `
:host {
  display: block;
  container: pocket-sdg / inline-size;
  width: 100%;
  font: inherit;
  color: #62544e;
}

* { box-sizing: border-box; }
button { font: inherit; cursor: pointer; touch-action: manipulation; }
button:focus-visible, a:focus-visible, summary:focus-visible, .reader:focus-visible {
  outline: 2px solid var(--accent, #805b6b);
  outline-offset: 4px;
}

.widget {
  --accent: #e5243b;
  --angle: 0deg;
  --divider: color-mix(in srgb, var(--route-heading-ink, #715343) 32%, transparent);
  background: transparent;
}

.body {
  display: grid;
  grid-template-columns: minmax(256px, 30%) minmax(0, 1fr);
  align-items: start;
}

/* Fixed slots keep the selector in place when titles and chapters change. */
.visual {
  position: sticky;
  top: 24px;
  display: grid;
  grid-template-rows: 9em 230px 64px;
  justify-items: center;
  gap: 16px;
  min-width: 0;
  padding: 24px 18px 44px;
  background: transparent;
}

.goal-label { width: 100%; margin: 0; font-size: inherit; text-align: left; }
.goal-number { display: block; font-size: .8em; line-height: 1.4; font-weight: 600; letter-spacing: .14em; color: var(--accent); }
.goal-name { display: block; margin-top: 7px; font-size: 1.5em; font-weight: 600; line-height: 1.2; letter-spacing: -.02em; color: #715343; }

.showcase { position: relative; display: grid; place-items: center; width: 100%; min-width: 0; height: 230px; --dx: 0px; --dy: 0px; }
.paper { position: absolute; width: 164px; height: 164px; border: 1px solid #d6cdbb; border-radius: 4px; transition: transform .45s ease; }
.paper-back { transform: translate(calc(-7px + var(--dx)), calc(5px + var(--dy))) rotate(-9deg); background: #cbd8b9; box-shadow: 0 18px 28px #7c645c1c; }
.paper-mid { transform: translate(calc(5px - var(--dx)), calc(1px - var(--dy))) rotate(6deg); background: #e2d7e8; border-color: #d3c1da; }
.icon-frame { position: relative; z-index: 1; width: 152px; height: 152px; background: #fff; box-shadow: 0 0 0 5px #fffdf9, 0 9px 19px #77554d1a; }
.official-icon { display: block; width: 100%; height: 100%; object-fit: contain; user-select: none; pointer-events: none; }
.orbit { position: absolute; width: min(228px, 100%); height: 230px; inset: 0; margin: auto; fill: none; stroke: #986d79; stroke-width: .85; opacity: .46; transform: rotate(var(--angle)); transition: transform .65s cubic-bezier(.2,.8,.2,1); pointer-events: none; }
.orbit .satellite { fill: #a27881; stroke: none; }
.orbit .small { fill: #a7ae86; }
.sprig { position: absolute; z-index: 2; left: 1px; bottom: 29px; width: 50px; height: 60px; fill: #a8ba94; stroke: #758969; stroke-width: 1; transform: rotate(-14deg); pointer-events: none; }
.sprig path:first-child { fill: none; }

.thumbs {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 0;
  width: 100%;
  padding-top: 12px;
  border-top: 1px solid var(--divider);
}
.thumb { position: relative; display: grid; place-items: center; width: 100%; min-width: 44px; height: 44px; padding: 3px; border: 0; background: transparent; border-radius: 0; transition: opacity .2s, transform .2s; }
.thumb img { display: block; width: 34px; height: 34px; object-fit: contain; pointer-events: none; }
.thumb:after { content: ""; position: absolute; left: 5px; right: 5px; bottom: -4px; height: 2px; background: transparent; transition: background-color .2s; }
.thumb:hover { opacity: .8; }
.thumb[aria-pressed=true]:after { background: var(--accent); }
.thumb:active { transform: scale(.96); }

.reading {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  padding: 24px 24px 60px;
  border-inline-start: 2px solid var(--divider);
  background: transparent;
}
.chapter-nav { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; gap: 14px; flex: none; }
.chapter-link { position: relative; min-width: 0; min-height: 44px; display: block; align-content: start; padding: 0 0 11px; border: 0; border-bottom: 1px solid var(--divider); border-radius: 0; background: transparent; color: #998174; text-align: left; font-size: .82em; font-weight: 500; line-height: 1.5; transition: color .2s, border-color .2s; }
.chapter-link:after { content: ""; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform .3s cubic-bezier(.2,.8,.2,1); }
.chapter-link:hover { color: #715343; border-color: #bfa797; }
.chapter-link[aria-current=step] { color: #715343; }
.chapter-link[aria-current=step]:after { transform: scaleX(1); }
.reader { position: relative; width: 100%; min-height: min(max(260px, var(--chapter-height, 260px)), var(--reader-capacity, 100000px)); padding: 0; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; }
.page { position: absolute; inset: 0; padding: 0 1px; background: transparent; }
.page.measure { inset: 0 0 auto; height: auto; visibility: hidden; pointer-events: none; }
.section { width: 100%; margin: 0; }
.section h3 { font-size: 1em; font-weight: 600; line-height: 1.55; color: #715343; margin: 0 0 16px; }
.prose { font-size: 1em; line-height: 1.8; color: #806e63; letter-spacing: .003em; overflow-wrap: anywhere; }
.prose p { margin: 0 0 15px; }
.prose p:last-child { margin-bottom: 0; }
.reading-actions { position: absolute; bottom: 8px; right: 22px; display: flex; align-items: center; gap: 7px; }
.page-prev, .page-next { display: grid; place-items: center; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: transparent; color: #967b68; font-size: 18px; line-height: 1; transition: color .2s, transform .2s; }
.page-prev:hover:not(:disabled), .page-next:hover:not(:disabled) { color: var(--accent); }
.page-prev:active:not(:disabled), .page-next:active:not(:disabled) { transform: scale(.96); }
.page-prev:disabled, .page-next:disabled { opacity: .28; cursor: default; }
.icon-credit { position: absolute; bottom: 0; left: 8px; z-index: 6; color: #9b8674; font-size: 11px; line-height: 1; }
.icon-credit summary { display: grid; place-items: center; width: 44px; height: 44px; list-style: none; cursor: pointer; user-select: none; }
.icon-credit summary::-webkit-details-marker { display: none; }
.credit-content { position: absolute; bottom: 46px; left: 0; width: 245px; padding: 13px 14px; border: 1px solid #e5d7cc; border-radius: 8px; background: #fffdf9; box-shadow: 0 5px 22px #66442b15; color: #967c6d; font-size: 10px; line-height: 1.7; }
.credit-content a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
.credit-content p { margin: 8px 0 0; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

@container pocket-sdg (max-width: 650px) {
  .body { grid-template-columns: minmax(180px, 34%) minmax(0, 1fr); }
  .visual { padding-inline: 12px; grid-template-rows: 9em 210px 108px; }
  .goal-name { font-size: 1.3em; }
  .showcase { height: 210px; }
  .paper { width: 140px; height: 140px; }
  .icon-frame { width: 130px; height: 130px; }
  .orbit { height: 210px; }
  .sprig { width: 38px; }
  .thumbs { grid-template-columns: repeat(3, minmax(44px, 1fr)); gap: 4px 2px; }
  .thumb img { width: min(28px, 100%); height: auto; aspect-ratio: 1; }
  .chapter-nav { grid-template-columns: 1fr; gap: 8px; }
  .chapter-link { padding-bottom: 7px; }
  .reading { padding-inline: 20px; }
}

@container pocket-sdg (max-width: 520px) {
  .body { display: block; }
  .visual { position: relative; top: auto; grid-template-columns: 132px minmax(0, 1fr); grid-template-rows: 6.5em 140px; gap: 12px 16px; padding: 18px 18px 44px; }
  .goal-label { grid-column: 1 / -1; grid-row: 1; align-self: start; }
  .goal-name { font-size: 1.3em; line-height: 1.3; }
  .goal-number { font-size: .8em; }
  .showcase { grid-column: 1; grid-row: 2; width: 132px; height: 118px; align-self: center; }
  .paper { width: 92px; height: 92px; }
  .icon-frame { width: 85px; height: 85px; box-shadow: 0 0 0 4px #fffdf9, 0 8px 17px #77554d1a; }
  .orbit { width: 132px; height: 135px; }
  .sprig { width: 29px; height: 35px; bottom: 3px; left: 1px; }
  .thumbs { grid-column: 2; grid-row: 2; align-self: center; grid-template-columns: repeat(3, minmax(44px, 1fr)); gap: 5px 2px; padding: 0; border: 0; }
  .thumb { min-width: 44px; height: 44px; }
  .thumb img { width: 30px; height: 30px; }
  .thumb:after { bottom: 0; }
  .reading { padding: 22px 18px 60px; border-inline-start: 0; border-block-start: 2px solid var(--divider); }
  .reader { min-height: min(max(280px, var(--chapter-height, 280px)), var(--reader-capacity, 100000px)); }
  .reading-actions { right: 12px; }
  .icon-credit { left: 4px; }
}

@container pocket-sdg (max-width: 340px) {
  .visual { grid-template-columns: 96px minmax(0, 1fr); grid-template-rows: 7em 148px; column-gap: 10px; padding-inline: 12px; }
  .goal-name { font-size: 1.2em; }
  .showcase { width: 96px; }
  .paper { width: 82px; height: 82px; }
  .icon-frame { width: 76px; height: 76px; }
  .orbit { width: 105px; }
  .sprig { width: 25px; left: -3px; bottom: 1px; }
  .thumbs { grid-template-columns: repeat(2, minmax(44px, 1fr)); }
  .reading { padding-inline: 12px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *:before, *:after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  .paper-back { transform: translate(-7px, 5px) rotate(-9deg); }
  .paper-mid { transform: translate(5px, 1px) rotate(6deg); }
  .thumb:active, .page-prev:active:not(:disabled), .page-next:active:not(:disabled) { transform: none; }
}
`;
  const PAGE_MS=220;
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let sequence=0;

  class CompactSDG extends HTMLElement {
    static get observedAttributes(){return ['default-goal'];}
    constructor(){
      super();this.attachShadow({mode:'open'});this.goal=1;this.stage=0;
      this.instanceId='sdg-pocket-'+(++sequence);this.renderFrame=0;
      this.pages=[];this.pageIndex=0;this.pageAnimations=[];this.layoutKey='';this.pageSerial=0;
      this.lastWheel=0;this.wheelUntil=0;this.wheelTurned=false;this.wheelDirection=0;this.wheelDistance=0;
    }
    connectedCallback(){
      this.reduced=matchMedia('(prefers-reduced-motion: reduce)');
      if(!this.ready)this.build();
      this.onReduce=()=>{if(this.reduced.matches){this.motion?.cancel();this.showPage(0,false,false);}};
      this.reduced.addEventListener('change',this.onReduce);
      this.onResize=()=>{
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame=requestAnimationFrame(()=>{this.renderFrame=0;this.paginate();});
      };
      this.resizeObserver=new ResizeObserver(this.onResize);
      this.resizeObserver.observe(this.$('.reader'));
      window.addEventListener('resize',this.onResize,{passive:true});
      window.visualViewport?.addEventListener('resize',this.onResize,{passive:true});
      document.fonts?.ready.then(()=>{if(this.isConnected){this.layoutKey='';this.paginate();}});
    }
    disconnectedCallback(){cancelAnimationFrame(this.renderFrame);this.motion?.cancel();this.pageAnimations.forEach(a=>a.cancel());this.reduced?.removeEventListener('change',this.onReduce);this.resizeObserver?.disconnect();window.removeEventListener('resize',this.onResize);window.visualViewport?.removeEventListener('resize',this.onResize);}
    $(s){return this.shadowRoot.querySelector(s);}
    $$(s){return [...this.shadowRoot.querySelectorAll(s)];}
    attributeChangedCallback(name,before,after){if(this.ready&&before!==after&&GOALS.some(g=>g.id===+after))this.selectGoal(+after);}
    build(){
      const initial=+this.getAttribute('default-goal');if(GOALS.some(g=>g.id===initial))this.goal=initial;
      this.shadowRoot.innerHTML=`<style>${CSS}</style><section class="widget" aria-label="CirCure sustainable development goals">
        <div class="body">
          <div class="visual">
            <h2 class="goal-label"><span class="goal-number"></span> <span class="goal-name"></span></h2>
            <div class="showcase">
              <div class="paper paper-back" aria-hidden="true"></div><div class="paper paper-mid" aria-hidden="true"></div>
              <svg class="orbit" viewBox="0 0 250 270" aria-hidden="true"><ellipse cx="125" cy="133" rx="112" ry="84" transform="rotate(-32 125 133)"/><circle class="satellite" cx="31" cy="170" r="4"/><circle class="satellite small" cx="213" cy="75" r="2.5"/></svg>
              <svg class="sprig" viewBox="0 0 65 75" aria-hidden="true"><path d="M9 70Q35 44 42 8"/><path d="M23 50Q4 40 12 26Q29 29 23 50Z"/><path d="M31 33Q31 13 49 14Q54 31 31 33Z"/><path d="M39 17Q46 1 59 6Q61 20 39 17Z"/></svg>
              <div class="icon-frame"><img class="official-icon" alt="" draggable="false"></div>
            </div>
            <div class="thumbs" role="group" aria-label="Select an SDG. Click or press Enter or Space to confirm.">${GOALS.map(g=>`<button type="button" class="thumb" data-goal="${g.id}" aria-label="SDG ${g.id}: ${esc(g.title)}" aria-pressed="false"><img data-page-src="${g.icon}" alt="" draggable="false"></button>`).join('')}</div>
            <details class="icon-credit"><summary aria-label="Official icon source and notice">ⓘ</summary><div class="credit-content"><a href="https://www.un.org/sustainabledevelopment/news/communications-material/" target="_blank" rel="noopener noreferrer">UN SDG icons ↗</a><p>The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.</p></div></details>
          </div>
          <div class="reading">
            <nav class="chapter-nav" aria-label="SDG sections">${GOALS[0].headings.slice(1).map((title,index)=>`<button type="button" class="chapter-link" data-stage="${index+1}" aria-controls="${this.instanceId}-reader">${esc(title)}</button>`).join('')}</nav>
            <div class="reader" id="${this.instanceId}-reader" tabindex="0" role="region" aria-label="SDG narrative"></div>
            <div class="reading-actions"><button type="button" class="page-prev" aria-label="Previous page">↑</button><button type="button" class="page-next" aria-label="Next page">↓</button></div>
          </div>
        </div>
        <span class="sr-only status" role="status" aria-live="polite"></span>
      </section>`;
      this.$$('.thumb').forEach(button=>{
        button.addEventListener('click',()=>this.selectGoal(+button.dataset.goal,{restart:true}));
        button.addEventListener('keydown',event=>{
          let at=GOALS.findIndex(g=>g.id===+button.dataset.goal);
          if(event.key==='ArrowRight')at=(at+1)%GOALS.length;
          else if(event.key==='ArrowLeft')at=(at+GOALS.length-1)%GOALS.length;
          else if(event.key==='Home')at=0;
          else if(event.key==='End')at=GOALS.length-1;
          else return;
          event.preventDefault();event.stopPropagation();this.$(`[data-goal="${GOALS[at].id}"]`).focus({preventScroll:true});
        });
      });
      // Preserve native Space activation inside the Wiki reader's scroll handler.
      this.shadowRoot.addEventListener('keydown',event=>{
        if(event.key===' '&&event.target.closest('button,summary'))event.stopPropagation();
      });
      const showcase=this.$('.showcase');
      showcase.addEventListener('pointermove',event=>{
        if(event.pointerType==='touch'||this.reduced?.matches)return;
        const r=showcase.getBoundingClientRect();showcase.style.setProperty('--dx',`${((event.clientX-r.left)/r.width-.5)*7}px`);showcase.style.setProperty('--dy',`${((event.clientY-r.top)/r.height-.5)*7}px`);
      },{passive:true});
      showcase.addEventListener('pointerleave',()=>{showcase.style.setProperty('--dx','0px');showcase.style.setProperty('--dy','0px');});
      this.$('.page-prev').addEventListener('click',()=>this.turn(-1));
      this.$('.page-next').addEventListener('click',()=>this.turn(1));
      this.$$('.chapter-link').forEach(button=>button.addEventListener('click',()=>this.goToChapter(+button.dataset.stage)));
      this.$('.widget').addEventListener('wheel',event=>this.readWheel(event),{passive:false});
      this.$('.reader').addEventListener('keydown',event=>{
        const direction=event.key==='ArrowDown'||event.key==='PageDown'||event.key===' '&&!event.shiftKey?1:event.key==='ArrowUp'||event.key==='PageUp'||event.key===' '&&event.shiftKey?-1:0;
        if(!direction||event.ctrlKey||event.metaKey||event.altKey)return;
        const reader=this.$('.reader');
        if(direction>0?reader.scrollHeight-reader.clientHeight-reader.scrollTop>1:reader.scrollTop>1){event.stopPropagation();return;}
        if(this.turn(direction)){event.preventDefault();event.stopPropagation();}
      });
      this.$('.icon-credit').addEventListener('keydown',event=>{if(event.key==='Escape'){event.currentTarget.open=false;event.currentTarget.querySelector('summary').focus();}});
      this.ready=true;this.render(false);
    }
    readWheel(event){
      if(event.defaultPrevented||event.ctrlKey||Math.abs(event.deltaY)<=Math.abs(event.deltaX)||event.target.closest('.icon-credit'))return;
      const reader=this.$('.reader'),inner=this.closest('.route-frame__scroll');
      const direction=Math.sign(event.deltaY),now=performance.now(),continuing=now-this.lastWheel<180;
      if(!continuing||direction!==this.wheelDirection){this.wheelTurned=false;this.wheelDistance=0;}
      if(direction!==this.wheelDirection)this.wheelUntil=0;
      this.lastWheel=now;this.wheelDirection=direction;
      const consume=()=>{event.preventDefault();event.stopPropagation();};
      // A trackpad's remaining momentum must not turn several chapters at once.
      if(continuing&&this.wheelTurned||now<this.wheelUntil){consume();return;}
      const overText=reader.contains(event.target);
      const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?reader.clientHeight:1);
      if(overText&&(direction>0?reader.scrollHeight-reader.clientHeight-reader.scrollTop>1:reader.scrollTop>1)){
        this.wheelDistance=0;return;
      }
      const scrollPage=amount=>{
        const scroller=inner&&/auto|scroll/.test(getComputedStyle(inner).overflowY)?inner:window;
        scroller.scrollBy({top:amount,behavior:'instant'});
      };
      if(!this.canTurn(direction)){
        // Explicitly cross the Wiki's overflow-hidden projected reader at either end.
        if(overText){consume();scrollPage(delta);}
        return;
      }
      const viewport=window.visualViewport,screenTop=viewport?.offsetTop||0;
      const screenBottom=screenTop+(viewport?.height||window.innerHeight),bounds=inner?.getBoundingClientRect();
      const top=Math.max(screenTop,document.querySelector('.site-header')?.getBoundingClientRect().bottom||0,bounds?.top||0);
      const bottom=Math.min(screenBottom,bounds?.bottom||screenBottom),rect=reader.getBoundingClientRect();
      if(rect.height>bottom-top-16||Math.min(rect.bottom,bottom)-Math.max(rect.top,top)<rect.height*.7)return;
      consume();
      if(rect.top<top+8||rect.bottom>bottom-8){
        // Finish entering the reading surface before interpreting a gesture as a page turn.
        const stage=this.$('.reading').getBoundingClientRect();
        scrollPage(stage.top-top-(bottom-top-stage.height)/2);
        this.wheelTurned=true;this.wheelUntil=now+180;return;
      }
      this.wheelDistance+=delta;
      if(Math.abs(this.wheelDistance)<30)return;
      this.wheelDistance=0;
      if(this.turn(direction)){this.wheelTurned=true;this.wheelUntil=now+PAGE_MS+180;}
    }
    selectGoal(id,options={}){
      if(!GOALS.some(g=>g.id===id))return;
      if(id===this.goal){
        if(options.restart){this.goToChapter(0);this.$('.icon-credit').open=false;}
        return;
      }
      this.goal=id;this.render(true,{...options,edge:options.edge||'first'});
      this.$('.icon-credit').open=false;
      this.dispatchEvent(new CustomEvent('sdg-change',{detail:{goal:id,chapter:this.stage},bubbles:true,composed:true}));
    }
    render(animate,options={}){
      const g=GOALS.find(g=>g.id===this.goal);
      const root=this.$('.widget');root.style.setProperty('--accent',g.color);root.style.setProperty('--tint',g.tint);root.style.setProperty('--angle',`${GOALS.indexOf(g)*19}deg`);
      this.$('.goal-number').textContent=`SDG ${g.id}`;this.$('.goal-name').textContent=g.title;this.$('.goal-label').setAttribute('aria-label',g.headings[0]);
      const icon=this.$('.official-icon');icon.dataset.pageSrc=g.icon;icon.alt=`Official United Nations SDG ${g.id}: ${g.title}`;
      this.$$('.thumb').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.goal===g.id)));
      this.layoutKey='';this.paginate({newGoal:true,animate,direction:options.direction||0,edge:options.edge});
      if(animate&&!this.reduced?.matches){this.motion?.cancel();this.motion=this.$('.icon-frame').animate([{transform:'translateY(6px)',opacity:.6},{transform:'translateY(-4px)',opacity:1},{transform:'translateY(0)',opacity:1}],{duration:520,easing:'cubic-bezier(.2,.8,.2,1)'});}
    }
    pageHTML(page,g=GOALS.find(g=>g.id===this.goal)){
      const heading=`${this.instanceId}-page-${++this.pageSerial}`;
      return `<section class="section" data-stage="${page.stage}" aria-labelledby="${heading}"><h3 id="${heading}">${esc(g.headings[page.stage])}</h3><div class="prose">${page.blocks.map(b=>`<p>${esc(b.text)}</p>`).join('')}</div></section>`;
    }
    paginate(options={}){
      const reader=this.$('.reader'),w=reader.clientWidth;
      if(w<80)return;
      const inner=this.closest('.route-frame__scroll'),screenHeight=window.visualViewport?.height||window.innerHeight;
      const available=Math.min(inner?.clientHeight||screenHeight,screenHeight-(document.querySelector('.site-header')?.getBoundingClientRect().height||0));
      const capacity=matchMedia('(min-width: 981px) and (min-height: 700px)').matches?Math.max(240,Math.floor(available-48-(this.$('.reading').offsetHeight-reader.offsetHeight))):100000;
      reader.style.setProperty('--reader-capacity',`${capacity}px`);
      const key=`${this.goal}/${w}/${this.clientWidth}/${capacity}`;if(this.layoutKey===key)return;
      const desiredStage=this.stage,g=GOALS.find(g=>g.id===this.goal);
      const fullPages=goal=>goal.original.map((paragraphs,stage)=>({stage,blocks:paragraphs.map((text,paragraph)=>({text,paragraph,start:0,end:text.length}))}));
      const pages=fullPages(g);
      const measure=document.createElement('div');measure.className='page measure';measure.setAttribute('aria-hidden','true');measure.inert=true;reader.append(measure);
      let tallest=0;
      try{
        // Measure every intact section at the real text width. One shared height
        // keeps the component stable when switching either sections or goals.
        for(const goal of GOALS)for(const page of fullPages(goal)){
          measure.innerHTML=this.pageHTML(page,goal);
          tallest=Math.max(tallest,measure.firstElementChild.getBoundingClientRect().height);
        }
      }finally{measure.remove();}
      reader.style.setProperty('--chapter-height',`${Math.ceil(tallest+12)}px`);
      this.pages=pages;
      this.layoutKey=key;
      let index=pages.findIndex(p=>p.stage===desiredStage);
      if(options.edge==='first')index=0;
      else if(options.edge==='last')index=pages.length-1;
      this.pageIndex=Math.max(0,index);
      this.showPage(options.direction||0,!!options.animate,!!options.animate);
    }
    canTurn(direction){
      const next=this.pageIndex+direction;if(next>=0&&next<this.pages.length)return true;
      const goal=GOALS.findIndex(g=>g.id===this.goal)+direction;return goal>=0&&goal<GOALS.length;
    }
    goToChapter(stage){
      const index=this.pages.findIndex(page=>page.stage===stage);
      if(index<0||index===this.pageIndex)return;
      const direction=Math.sign(index-this.pageIndex);
      this.pageIndex=index;
      this.showPage(direction,true,true);
    }
    turn(direction){
      if(!this.canTurn(direction))return false;
      const next=this.pageIndex+direction;
      if(next<0||next>=this.pages.length){const at=GOALS.findIndex(g=>g.id===this.goal);this.selectGoal(GOALS[at+direction].id,{edge:direction>0?'first':'last',direction});}
      else{this.pageIndex=next;this.showPage(direction,true,true);}
      return true;
    }
    showPage(direction=0,animate=false,announce=true){
      const page=this.pages[this.pageIndex];if(!page)return;
      this.pageAnimations.forEach(a=>a.cancel());this.pageAnimations=[];
      const reader=this.$('.reader');this.$$('.page:not(.measure)').forEach(el=>el.remove());
      const next=document.createElement('div');next.className='page';next.innerHTML=this.pageHTML(page);reader.append(next);
      reader.scrollTop=direction<0?reader.scrollHeight:0;
      if(animate&&!this.reduced?.matches&&direction){
        const space=Math.max(0,(reader.clientHeight-next.firstElementChild.getBoundingClientRect().height)/2-1),travel=Math.min(14,space);
        const timing={duration:PAGE_MS,easing:'cubic-bezier(.2,.7,.25,1)'};
        this.pageAnimations.push(next.animate([{transform:`translateY(${direction*travel}px)`,opacity:.72},{transform:'translateY(0)',opacity:1}],timing));
      }
      const g=GOALS.find(g=>g.id===this.goal),oldStage=this.stage;this.stage=page.stage;
      this.$$('.chapter-link').forEach(button=>{
        const stage=+button.dataset.stage;button.textContent=g.headings[stage];
        if(stage===this.stage)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');
      });
      this.$('.page-prev').disabled=!this.canTurn(-1);this.$('.page-next').disabled=!this.canTurn(1);
      reader.setAttribute('aria-label',`${g.headings[page.stage]}. Page ${this.pageIndex+1} of ${this.pages.length}.`);
      if(announce)this.$('.status').textContent=`${g.headings[page.stage]}. Page ${this.pageIndex+1} of ${this.pages.length}.`;
      if(oldStage!==page.stage)this.dispatchEvent(new CustomEvent('sdg-chapter-change',{detail:{goal:this.goal,chapter:page.stage},bubbles:true,composed:true}));
      this.dispatchEvent(new CustomEvent('sdg-page-change',{detail:{goal:this.goal,chapter:page.stage,page:this.pageIndex+1,total:this.pages.length},bubbles:true,composed:true}));
    }
  }
  customElements.define('circure-sdg-explorer',CompactSDG);
})();
