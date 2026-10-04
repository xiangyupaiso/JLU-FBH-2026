const EMBEDDED = new URLSearchParams(window.location.search).get("embed") === "1";
const ASSET = "https://static.igem.wiki/teams/6056/wiki/virtual-lab/experiment4/ppt/";
const assetUrl = (name) => ASSET + name.replace(/\.png$/i, ".avif");

const stages = [
  {
    title: "Locate and Excise",
    short: "Locate the 720 bp Target Band",
    knowledge: "Minimize UV exposure to prevent DNA damage. Trim excess gel during excision.",
    parameters: ["Target: 720 bp", "Locate Quickly", "Minimize Gel Volume"],
    sample: { asset: "gel-lanes.png", label: "Gel for Extraction" },
    tasks: [
      {
        mode: "drag",
        title: "Place the gel in the imager",
        detail: "Examine electrophoresis results, then quickly locate the target band under UV.",
        target: "Gel Imager",
        targetAsset: "gel-imager.png",
        correct: "gel",
        hint: "Select the purple gel with multiple DNA bands.",
        record: "Gel placed in the imager",
        choices: [
          { id: "gel", label: "Electrophoresis Gel", asset: "gel-lanes.png" },
          { id: "red-gel", label: "Gel Casting Plate", asset: "red-gel.png" },
          { id: "rack", label: "Centrifuge Tube Rack", asset: "tube-rack-filled.png" },
          { id: "tips", label: "Tip Box", asset: "tips-open.png" }
        ]
      },
      {
        mode: "select",
        inspectView: true,
        title: "Locate the Target DNA Band",
        detail: "Compare with the DNA ladder and select the required band size.",
        target: "Target Band",
        targetAsset: "gel-dna-ladder.png",
        correct: "720",
        hint: "Recover the 720 bp DNA fragment.",
        record: "720 bp target band located",
        choices: [
          { id: "500", label: "500 bp" },
          { id: "720", label: "720 bp" },
          { id: "1000", label: "1000 bp" },
          { id: "1500", label: "1500 bp" }
        ]
      },
      {
        mode: "drag",
        title: "Excise the band with a clean blade",
        detail: "Cut along the band edges to minimize UV exposure and unwanted gel.",
        target: "720 bp Band",
        targetAsset: "gel-imager-on.png",
        correct: "scalpel",
        hint: "Use a clean, sharp blade for excision.",
        record: "720 bp target band excised",
        choices: [
          { id: "scalpel", label: "Clean Blade", asset: "scalpel.png" },
          { id: "tweezers", label: "Forceps", asset: "tweezers.png" },
          { id: "pipette", label: "Pipette", asset: "pipette.png" },
          { id: "comb", label: "Gel Comb", asset: "comb.png" }
        ]
      },
      {
        mode: "drag",
        title: "Transfer the gel slice to a tube",
        detail: "Trim excess gel and transfer the entire target slice to a clean tube.",
        target: "Clean Centrifuge Tube",
        targetAsset: "microtube-empty.png",
        correct: "band",
        hint: "Select the single purple DNA gel slice just excised.",
        record: "Target gel slice transferred to the tube",
        choices: [
          { id: "band", label: "Target Gel Slice", asset: "dna-band.png" },
          { id: "tip", label: "Pipette Tip", asset: "pipette-tip.png" },
          { id: "column", label: "Binding Column", asset: "column-mini.png" },
          { id: "tube", label: "Reagent Tube", asset: "sample-green.png" }
        ]
      }
    ]
  },
  {
    title: "Dissolve the Gel",
    short: "Dissolve the Gel at 55°C",
    knowledge: "Add buffer at a 1:3 gel mass-to-buffer volume ratio. Incubate at 55°C and mix every 2 min until clear.",
    parameters: ["Mass:volume = 1:3", "55℃", "Mix Every 2 min"],
    sample: { asset: "sample-green.png", label: "Sample with Gel Slice" },
    tasks: [
      {
        mode: "select",
        title: "Set the Solubilization Buffer Ratio",
        detail: "Calculate the buffer volume from the gel mass.",
        target: "Buffer Ratio",
        targetAsset: "sample-green.png",
        correct: "1:3",
        hint: "The protocol specifies a 1:3 gel mass-to-buffer volume ratio.",
        record: "Solubilization buffer ratio set to 1:3",
        choices: [
          { id: "1:1", label: "1 : 1" },
          { id: "1:2", label: "1 : 2" },
          { id: "1:3", label: "1 : 3" },
          { id: "1:5", label: "1 : 5" }
        ]
      },
      {
        mode: "drag",
        title: "Add the calculated buffer volume",
        detail: "Pipette buffer along the tube wall to avoid splashing.",
        target: "Tube with Gel Slice",
        targetAsset: "tube-open.png",
        correct: "buffer",
        hint: "Select the purple-labeled solubilization buffer tube.",
        record: "Solubilization buffer added at 1:3",
        choices: [
          { id: "buffer", label: "Solubilization Buffer", asset: "buffer-purple.png" },
          { id: "wash", label: "Wash Buffer", asset: "buffer-blue.png" },
          { id: "elution", label: "Elution Buffer", asset: "buffer-green.png" },
          { id: "water", label: "Ultrapure Water", asset: "reagent-bottle.png" }
        ]
      },
      {
        mode: "select",
        title: "Set the Water Bath Temperature",
        detail: "Select the correct temperature to accelerate agarose dissolution.",
        target: "Water Bath Temperature",
        targetAsset: "water-bath.png",
        correct: "55",
        hint: "The protocol requires 55°C.",
        record: "Water bath set to 55°C",
        choices: [
          { id: "37", label: "37℃" },
          { id: "50", label: "50℃" },
          { id: "55", label: "55℃" },
          { id: "65", label: "65℃" }
        ]
      },
      {
        mode: "drag",
        title: "Place the sample in the 55°C water bath",
        detail: "Close the tube securely and place it in the water bath.",
        target: "55°C Water Bath",
        targetAsset: "water-bath.png",
        correct: "sample",
        hint: "Select the sample tube containing solubilization buffer.",
        record: "Sample placed in the 55°C water bath",
        choices: [
          { id: "sample", label: "Sample with Gel Slice", asset: "sample-green.png" },
          { id: "empty", label: "Empty Centrifuge Tube", asset: "microtube-empty.png" },
          { id: "column", label: "Binding Column", asset: "spin-column.png" },
          { id: "tips", label: "Tip Box", asset: "tips-box-open.png" }
        ]
      },
      {
        mode: "timer",
        title: "Set the Mixing Interval",
        detail: "Mix gently at regular intervals until the gel dissolves and the solution is clear.",
        target: "Water Bath Timer",
        targetAsset: "sample-orange.png",
        correct: "2min",
        hint: "Mix every 2 min.",
        record: "Gel fully dissolved; solution clear",
        choices: [
          { id: "1min", label: "Every 1 min" },
          { id: "2min", label: "Every 2 min" },
          { id: "5min", label: "Every 5 min" },
          { id: "none", label: "No mixing needed" }
        ]
      }
    ]
  },
  {
    title: "Bind and Spin",
    short: "Bind DNA to Silica",
    knowledge: "DNA binds to the silica membrane. Discard the flow-through after centrifugation and return the column to its tube.",
    parameters: ["Leave for 2 min", "Spin for 30 s", "Discard Flow-through"],
    sample: { asset: "sample-orange.png", label: "Clear Dissolved Sample" },
    tasks: [
      {
        mode: "drag",
        title: "Transfer the solution to the column",
        detail: "Add slowly to the center of the column without wetting the rim.",
        target: "Silica Binding Column",
        targetAsset: "column-green.png",
        correct: "lysate",
        hint: "Select the fully dissolved, orange-labeled sample tube.",
        record: "Solution transferred to the column",
        choices: [
          { id: "lysate", label: "Dissolved Sample", asset: "sample-orange.png" },
          { id: "wash", label: "Wash Buffer", asset: "buffer-blue.png" },
          { id: "elution", label: "Elution Buffer", asset: "buffer-green.png" },
          { id: "water", label: "Ultrapure Water", asset: "reagent-bottle.png" }
        ]
      },
      {
        mode: "timer",
        title: "Allow DNA to Bind",
        detail: "Allow the sample to fully contact the column membrane.",
        target: "Column Timer",
        targetAsset: "column-green-alt.png",
        correct: "2min",
        hint: "Leave for 2 min before centrifugation.",
        record: "Column left for 2 min",
        choices: [
          { id: "30s", label: "30 s" },
          { id: "1min", label: "1 min" },
          { id: "2min", label: "2 min" },
          { id: "5min", label: "5 min" }
        ]
      },
      {
        mode: "drag",
        title: "Place the column in the centrifuge",
        detail: "Close the column cap and balance the opposite position.",
        target: "Benchtop Centrifuge",
        targetAsset: "centrifuge.png",
        correct: "column",
        hint: "Select the column containing the dissolved sample.",
        record: "Column loaded and balanced",
        choices: [
          { id: "column", label: "Loaded Binding Column", asset: "column-green-alt.png" },
          { id: "tube", label: "Empty Centrifuge Tube", asset: "microtube-empty.png" },
          { id: "tip", label: "Pipette Tip", asset: "pipette-tip.png" },
          { id: "gel", label: "Electrophoresis Gel", asset: "gel-lanes.png" }
        ]
      },
      {
        mode: "timer",
        title: "Set the First Spin Time",
        detail: "A brief spin passes liquid through the membrane while retaining DNA.",
        target: "Centrifugation Settings",
        targetAsset: "centrifuge.png",
        correct: "30s",
        hint: "Spin for 30 s in this step.",
        record: "Column centrifuged for 30 s",
        choices: [
          { id: "10s", label: "10 s" },
          { id: "30s", label: "30 s" },
          { id: "1min", label: "1 min" },
          { id: "2min", label: "2 min" }
        ]
      },
      {
        mode: "select",
        title: "Handle the Fractions",
        detail: "DNA is bound to the membrane. Choose which fraction to keep or discard.",
        target: "After Centrifugation",
        targetAsset: "column-collection.png",
        correct: "flowthrough",
        hint: "DNA is on the membrane; discard the flow-through in the collection tube.",
        record: "Flow-through discarded; column returned to the tube",
        choices: [
          { id: "flowthrough", label: "Discard flow-through" },
          { id: "membrane", label: "Discard membrane" },
          { id: "all", label: "Discard everything" },
          { id: "keep", label: "Keep everything" }
        ]
      }
    ]
  },
  {
    title: "Wash and Dry",
    short: "Remove Salts and Ethanol",
    knowledge: "Spin the empty column after washing to remove residual ethanol, which can inhibit downstream enzyme reactions.",
    parameters: ["Wash Buffer: 600 μL", "Spin for 30 s", "Empty Column: 2 min"],
    sample: { asset: "column-green-alt.png", label: "Column with Bound DNA" },
    tasks: [
      {
        mode: "select",
        title: "Set the Wash Buffer Volume",
        detail: "Select the volume required for one wash.",
        target: "Wash Volume",
        targetAsset: "buffer-blue.png",
        correct: "600",
        hint: "Add 600 μL wash buffer.",
        record: "Wash volume set to 600 μL",
        choices: [
          { id: "200", label: "200 μL" },
          { id: "400", label: "400 μL" },
          { id: "600", label: "600 μL" },
          { id: "1000", label: "1000 μL" }
        ]
      },
      {
        mode: "drag",
        title: "Add wash buffer to the column",
        detail: "Add to the center without touching the membrane with the tip.",
        target: "DNA Binding Column",
        targetAsset: "column-green-alt.png",
        correct: "wash",
        hint: "Select the blue-labeled wash buffer.",
        record: "600 μL wash buffer added",
        choices: [
          { id: "wash", label: "Wash Buffer", asset: "buffer-blue.png" },
          { id: "sol", label: "Solubilization Buffer", asset: "buffer-purple.png" },
          { id: "elu", label: "Elution Buffer", asset: "buffer-green.png" },
          { id: "water", label: "Ultrapure Water", asset: "reagent-bottle.png" }
        ]
      },
      {
        mode: "drag",
        title: "Place the washed column in the centrifuge",
        detail: "Check balance and cap closure again.",
        target: "Benchtop Centrifuge",
        targetAsset: "centrifuge.png",
        correct: "column",
        hint: "Select the column containing wash buffer.",
        record: "Washed column loaded and balanced",
        choices: [
          { id: "column", label: "Wash Column", asset: "column-green-alt.png" },
          { id: "tube", label: "Empty Centrifuge Tube", asset: "microtube-empty.png" },
          { id: "buffer", label: "Wash Buffer Tube", asset: "buffer-blue.png" },
          { id: "rack", label: "Centrifuge Tube Rack", asset: "tube-rack.png" }
        ]
      },
      {
        mode: "timer",
        title: "Set the Wash Spin Time",
        detail: "Pass wash buffer through the membrane to remove salts.",
        target: "Centrifugation Settings",
        targetAsset: "centrifuge.png",
        correct: "30s",
        hint: "Spin for 30 s during washing.",
        record: "Washed column centrifuged for 30 s",
        choices: [
          { id: "10s", label: "10 s" },
          { id: "30s", label: "30 s" },
          { id: "1min", label: "1 min" },
          { id: "2min", label: "2 min" }
        ]
      },
      {
        mode: "select",
        title: "Discard the wash flow-through",
        detail: "DNA remains bound to the membrane after washing.",
        target: "After Washing",
        targetAsset: "column-collection.png",
        correct: "discard",
        hint: "Discard wash flow-through and retain the column.",
        record: "Wash flow-through discarded",
        choices: [
          { id: "discard", label: "Discard flow-through" },
          { id: "keep", label: "Keep flow-through" },
          { id: "column", label: "Discard column" },
          { id: "mix", label: "Mix again" }
        ]
      },
      {
        mode: "timer",
        title: "Spin the empty column to remove ethanol",
        detail: "Spin without adding liquid to dry the membrane.",
        target: "Empty Column Spin",
        targetAsset: "centrifuge.png",
        correct: "2min",
        hint: "Spin the empty column for 2 min.",
        record: "Empty column spun for 2 min; residual ethanol removed",
        choices: [
          { id: "30s", label: "30 s" },
          { id: "1min", label: "1 min" },
          { id: "2min", label: "2 min" },
          { id: "5min", label: "5 min" }
        ]
      }
    ]
  },
  {
    title: "Elute and Collect DNA",
    short: "Recover the Purified Fragment",
    knowledge: "Preheat elution buffer to 55°C to improve recovery. Smaller elution volumes yield more concentrated DNA.",
    parameters: ["15–30 μL", "55°C Elution Buffer", "Leave for 5 min", "Spin for 2 min"],
    sample: { asset: "column-green-alt.png", label: "Dry Binding Column" },
    tasks: [
      {
        mode: "drag",
        title: "Move the column to a new collection tube",
        detail: "Use a clean new tube to avoid contamination from previous flow-through.",
        target: "Clean Collection Tube",
        targetAsset: "microtube-empty.png",
        correct: "column",
        hint: "Move the washed and dried column.",
        record: "Column moved to a new collection tube",
        choices: [
          { id: "column", label: "Dry Binding Column", asset: "column-green-alt.png" },
          { id: "flow", label: "Previous Flow-through", asset: "sample-clear.png" },
          { id: "gel", label: "Electrophoresis Gel", asset: "gel-lanes.png" },
          { id: "tips", label: "Tip Box", asset: "tips-open.png" }
        ]
      },
      {
        mode: "select",
        title: "Select the Elution Volume",
        detail: "Choose within the specified range to balance yield and concentration.",
        target: "Elution Volume",
        targetAsset: "pipette.png",
        correct: "20",
        hint: "The range is 15–30 μL; use 20 μL in this experiment.",
        record: "Elution volume set to 20 μL",
        choices: [
          { id: "5", label: "5 μL" },
          { id: "20", label: "20 μL" },
          { id: "50", label: "50 μL" },
          { id: "100", label: "100 μL" }
        ]
      },
      {
        mode: "select",
        title: "Set the Elution Preheating Temperature",
        detail: "Warm the elution buffer to improve DNA release from the membrane.",
        target: "Elution Buffer Temperature",
        targetAsset: "buffer-green.png",
        correct: "55",
        hint: "Preheat the buffer to 55°C.",
        record: "Elution buffer preheated to 55°C",
        choices: [
          { id: "4", label: "4℃" },
          { id: "25", label: "25℃" },
          { id: "37", label: "37℃" },
          { id: "55", label: "55℃" }
        ]
      },
      {
        mode: "drag",
        title: "Add elution buffer to the membrane center",
        detail: "Avoid touching the membrane. Cover its center with the liquid.",
        target: "Dry Membrane",
        targetAsset: "spin-column.png",
        correct: "elution",
        hint: "Select the green-labeled, preheated elution buffer.",
        record: "20 μL elution buffer added to the membrane center",
        choices: [
          { id: "elution", label: "55°C Elution Buffer", asset: "buffer-green.png" },
          { id: "wash", label: "Wash Buffer", asset: "buffer-blue.png" },
          { id: "sol", label: "Solubilization Buffer", asset: "buffer-purple.png" },
          { id: "water", label: "Ultrapure Water", asset: "reagent-bottle.png" }
        ]
      },
      {
        mode: "timer",
        title: "Allow DNA to Elute",
        detail: "Allow the buffer to saturate the membrane and release DNA.",
        target: "Elution Incubation",
        targetAsset: "column-collection.png",
        correct: "5min",
        hint: "Leave for 5 min before the final spin.",
        record: "Elution column left for 5 min",
        choices: [
          { id: "1min", label: "1 min" },
          { id: "2min", label: "2 min" },
          { id: "5min", label: "5 min" },
          { id: "10min", label: "10 min" }
        ]
      },
      {
        mode: "timer",
        title: "Centrifuge to collect the eluate",
        detail: "Centrifugation collects DNA-containing eluate in the new tube.",
        target: "Final Spin",
        targetAsset: "centrifuge.png",
        correct: "2min",
        hint: "The final spin is 2 min.",
        record: "Elution column centrifuged for 2 min",
        choices: [
          { id: "30s", label: "30 s" },
          { id: "1min", label: "1 min" },
          { id: "2min", label: "2 min" },
          { id: "5min", label: "5 min" }
        ]
      },
      {
        mode: "select",
        title: "Confirm the Final DNA Sample",
        detail: "Identify the location of the target DNA and complete collection.",
        target: "Purified DNA",
        targetAsset: "column-collection.png",
        correct: "eluate",
        hint: "Purified DNA is in the eluate in the new collection tube.",
        record: "Purified DNA collected and labeled",
        choices: [
          { id: "eluate", label: "Collect eluate" },
          { id: "column", label: "Keep old membrane" },
          { id: "waste", label: "Collect waste" },
          { id: "gel", label: "Keep gel" }
        ]
      }
    ]
  }
];

const totalTasks = stages.reduce((total, stage) => total + stage.tasks.length, 0);

const state = {
  stageIndex: 0,
  taskIndex: 0,
  completed: 0,
  score: 100,
  records: [],
  selected: null,
  started: false,
  startTime: null,
  elapsed: 0,
  timerHandle: null,
  busy: false,
  hintUsedFor: new Set()
};

const els = {
  stageList: document.querySelector("#stage-list"),
  choiceGrid: document.querySelector("#choice-grid"),
  focusTarget: document.querySelector("#focus-target"),
  targetImage: document.querySelector("#target-image"),
  targetLabel: document.querySelector("#target-label"),
  targetAction: document.querySelector("#target-action"),
  sampleStateImage: document.querySelector("#sample-state-image"),
  sampleStateLabel: document.querySelector("#sample-state-label"),
  sceneTitle: document.querySelector("#scene-title"),
  sceneBadge: document.querySelector("#scene-badge"),
  captionIndex: document.querySelector("#caption-index"),
  captionStage: document.querySelector("#caption-stage"),
  captionTask: document.querySelector("#caption-task"),
  taskCounter: document.querySelector("#task-counter"),
  instructionKicker: document.querySelector("#instruction-kicker"),
  instructionTitle: document.querySelector("#instruction-title"),
  instructionDetail: document.querySelector("#instruction-detail"),
  knowledgeText: document.querySelector("#knowledge-text"),
  parameterRow: document.querySelector("#parameter-row"),
  modeBadge: document.querySelector("#mode-badge"),
  dropGuide: document.querySelector("#drop-guide"),
  overallProgressText: document.querySelector("#overall-progress-text"),
  overallProgressBar: document.querySelector("#overall-progress-bar"),
  scoreValue: document.querySelector("#score-value"),
  timerValue: document.querySelector("#timer-value"),
  recordCount: document.querySelector("#record-count"),
  recordList: document.querySelector("#record-list"),
  labCanvas: document.querySelector("#lab-canvas"),
  hintButton: document.querySelector("#hint-button"),
  resetButton: document.querySelector("#reset-button"),
  introModal: document.querySelector("#intro-modal"),
  startButton: document.querySelector("#start-button"),
  resultModal: document.querySelector("#result-modal"),
  resultResetButton: document.querySelector("#result-reset-button"),
  resultScore: document.querySelector("#result-score"),
  resultTime: document.querySelector("#result-time"),
  toast: document.querySelector("#toast"),
  toastIcon: document.querySelector("#toast-icon"),
  toastMessage: document.querySelector("#toast-message")
};

let toastTimer;

function currentStage() {
  return stages[state.stageIndex];
}

function currentTask() {
  return currentStage().tasks[state.taskIndex];
}

function notifyParent() {
  if (window.parent === window) return;
  const stage = currentStage();
  const task = currentTask();
  window.parent.postMessage({
    type: "experiment4:state",
    stageIndex: state.stageIndex,
    taskIndex: state.taskIndex,
    completed: state.completed,
    totalTasks,
    complete: state.completed >= totalTasks,
    stageTitle: stage.title,
    taskTitle: task.title,
    taskDetail: task.detail
  }, window.location.origin);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${pad(minutes)}:${pad(rest)}`;
}

function renderStages() {
  els.stageList.innerHTML = stages.map((stage, index) => {
    const statusClass = index < state.stageIndex ? "is-complete" : index === state.stageIndex ? "is-active" : "";
    const marker = index < state.stageIndex ? "✓" : pad(index + 1);
    return `
      <li class="stage-item ${statusClass}">
        <span class="stage-number">${marker}</span>
        <div>
          <strong>${stage.title}</strong>
          <small>${stage.short}</small>
        </div>
      </li>`;
  }).join("");
}

function renderChoices(task) {
  els.choiceGrid.innerHTML = task.choices.map((choice, index) => {
    const image = choice.asset ? `<img src="${assetUrl(choice.asset)}" alt="" draggable="false" />` : "";
    const modeClass = task.mode === "drag" ? "" : "is-select";
    const sublabel = task.mode === "drag" ? `<small>${pad(index + 1)} · Drag or Click</small>` : "";
    return `
      <button
        class="choice-card ${modeClass}"
        type="button"
        data-choice="${choice.id}"
        draggable="${task.mode === "drag"}"
        aria-label="${choice.label}"
      >
        ${image}
        <span>${choice.label}</span>
        ${sublabel}
      </button>`;
  }).join("");

  els.choiceGrid.querySelectorAll(".choice-card").forEach((card) => {
    card.addEventListener("click", () => handleChoiceClick(card.dataset.choice, card));
    card.addEventListener("dragstart", (event) => {
      if (currentTask().mode !== "drag" || state.busy) return;
      state.selected = card.dataset.choice;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", card.dataset.choice);
      card.classList.add("is-selected");
    });
    card.addEventListener("dragend", () => {
      els.focusTarget.classList.remove("is-drag-over");
    });
  });
}

function renderRecords() {
  els.recordCount.textContent = `${state.records.length} entries`;
  if (!state.records.length) {
    els.recordList.innerHTML = '<li class="record-empty">Your experimental records will appear here after each action.</li>';
    return;
  }

  els.recordList.innerHTML = state.records.slice(-5).reverse().map((record) => (
    `<li><span>${record}</span></li>`
  )).join("");
}

function render() {
  const stage = currentStage();
  const task = currentTask();
  const stageNumber = state.stageIndex + 1;
  const taskNumber = state.taskIndex + 1;
  const progress = Math.round((state.completed / totalTasks) * 100);

  renderStages();
  renderChoices(task);
  renderRecords();
  els.labCanvas.classList.toggle("is-inspection-view", Boolean(task.inspectView));

  els.sceneTitle.textContent = `${stage.title} · Action ${taskNumber}`;
  els.sceneBadge.textContent = `STEP ${pad(stageNumber)}`;
  els.targetImage.src = assetUrl(task.targetAsset);
  els.targetImage.alt = task.target;
  els.targetLabel.textContent = task.target;
  els.targetAction.textContent = task.mode === "drag" ? "Drag or click the target" : task.mode === "timer" ? "Select the duration and run" : "Select the correct setting";
  els.sampleStateImage.src = assetUrl(stage.sample.asset);
  els.sampleStateImage.alt = stage.sample.label;
  els.sampleStateLabel.textContent = stage.sample.label;
  els.captionIndex.textContent = pad(taskNumber);
  els.captionStage.textContent = stage.title;
  els.captionTask.textContent = task.title;
  els.taskCounter.textContent = `${pad(taskNumber)} / ${pad(stage.tasks.length)}`;
  els.instructionKicker.textContent = `STEP ${pad(stageNumber)} · ${stage.title}`;
  els.instructionTitle.textContent = task.title;
  els.instructionDetail.textContent = task.detail;
  els.knowledgeText.textContent = stage.knowledge;
  els.parameterRow.innerHTML = stage.parameters.map((parameter) => `<span class="parameter-chip">${parameter}</span>`).join("");
  els.modeBadge.textContent = task.mode === "drag" ? "Drag and Drop" : task.mode === "timer" ? "Timer Settings" : "Parameter Selection";
  els.dropGuide.classList.toggle("is-select", task.mode !== "drag");
  els.dropGuide.querySelector(".drop-guide-icon").textContent = task.mode === "drag" ? "↗" : task.mode === "timer" ? "◷" : "◎";
  els.dropGuide.querySelector("strong").textContent = task.mode === "drag" ? "Drag the correct item" : task.mode === "timer" ? "Select the correct duration" : "Select the correct setting";
  els.dropGuide.querySelector("p").textContent = task.mode === "drag" ? "Drag to the glowing target in the experiment area" : task.mode === "timer" ? "The teaching timer runs at an accelerated speed" : "Click an option to submit";
  els.overallProgressText.textContent = `${state.completed} / ${totalTasks}`;
  els.overallProgressBar.style.width = `${progress}%`;
  els.overallProgressBar.parentElement.setAttribute("aria-valuenow", progress);
  els.scoreValue.textContent = state.score;
  state.selected = null;
  notifyParent();
}

function handleChoiceClick(choiceId, card) {
  if (state.busy) return;
  const task = currentTask();

  if (task.mode === "drag") {
    els.choiceGrid.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("is-selected"));
    if (state.selected === choiceId) {
      state.selected = null;
      return;
    }
    state.selected = choiceId;
    card.classList.add("is-selected");
    showToast(`Selected “${card.querySelector("span").textContent}”. Click the glowing target`, "info");
    return;
  }

  validateAction(choiceId, card);
}

function validateAction(choiceId, sourceCard = null) {
  if (state.busy) return;
  const task = currentTask();
  const card = sourceCard || els.choiceGrid.querySelector(`[data-choice="${CSS.escape(choiceId)}"]`);

  if (choiceId !== task.correct) {
    state.score = Math.max(0, state.score - 4);
    els.scoreValue.textContent = state.score;
    card?.classList.add("is-wrong");
    setTimeout(() => card?.classList.remove("is-wrong"), 420);
    showToast("This action does not match the procedure. Review the key points and try again.", "error");
    return;
  }

  card?.classList.add("is-correct");
  state.busy = true;
  els.labCanvas.classList.add("is-busy");

  if (task.mode === "timer") {
    showToast("Timer running · Accelerated for demonstration", "info");
    setTimeout(() => completeTask(task), 1450);
  } else {
    showToast("Correct action; experiment state updated", "success");
    setTimeout(() => completeTask(task), 650);
  }
}

function completeTask(task) {
  state.records.push(task.record);
  state.completed += 1;
  state.busy = false;
  els.labCanvas.classList.remove("is-busy");

  const stage = currentStage();
  if (state.taskIndex < stage.tasks.length - 1) {
    state.taskIndex += 1;
    render();
    return;
  }

  if (state.stageIndex < stages.length - 1) {
    state.stageIndex += 1;
    state.taskIndex = 0;
    render();
    showToast(`Stage complete · Moving to “${currentStage().title}”`, "success");
    return;
  }

  finishExperiment();
}

function showToast(message, type = "success") {
  clearTimeout(toastTimer);
  els.toast.classList.remove("is-error", "is-info");
  if (type === "error") els.toast.classList.add("is-error");
  if (type === "info") els.toast.classList.add("is-info");
  els.toastIcon.textContent = type === "error" ? "!" : type === "info" ? "i" : "✓";
  els.toastMessage.textContent = message;
  els.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2500);
}

function useHint() {
  const key = `${state.stageIndex}-${state.taskIndex}`;
  if (!state.hintUsedFor.has(key)) {
    state.hintUsedFor.add(key);
    state.score = Math.max(0, state.score - 2);
    els.scoreValue.textContent = state.score;
  }
  showToast(currentTask().hint, "info");
}

function startExperiment() {
  els.introModal.classList.remove("is-visible");
  if (state.timerHandle) window.clearInterval(state.timerHandle);
  state.started = true;
  state.startTime = Date.now();
  state.timerHandle = window.setInterval(() => {
    state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    els.timerValue.textContent = formatTime(state.elapsed);
  }, 1000);
  showToast("Experiment started. Complete the first action.", "info");
  notifyParent();
}

function finishExperiment() {
  if (state.timerHandle) window.clearInterval(state.timerHandle);
  state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  els.timerValue.textContent = formatTime(state.elapsed);
  els.overallProgressText.textContent = `${totalTasks} / ${totalTasks}`;
  els.overallProgressBar.style.width = "100%";
  els.overallProgressBar.parentElement.setAttribute("aria-valuenow", "100");
  els.resultScore.textContent = state.score;
  els.resultTime.textContent = formatTime(state.elapsed);
  els.resultModal.classList.add("is-visible");
  notifyParent();
}

function resetExperiment(showIntro = true) {
  if (state.timerHandle) window.clearInterval(state.timerHandle);
  state.stageIndex = 0;
  state.taskIndex = 0;
  state.completed = 0;
  state.score = 100;
  state.records = [];
  state.selected = null;
  state.started = false;
  state.startTime = null;
  state.elapsed = 0;
  state.busy = false;
  state.hintUsedFor.clear();
  els.timerValue.textContent = "00:00";
  els.resultModal.classList.remove("is-visible");
  els.introModal.classList.toggle("is-visible", showIntro);
  render();
}

els.focusTarget.addEventListener("dragover", (event) => {
  if (currentTask().mode !== "drag" || state.busy) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  els.focusTarget.classList.add("is-drag-over");
});

els.focusTarget.addEventListener("dragleave", () => {
  els.focusTarget.classList.remove("is-drag-over");
});

els.focusTarget.addEventListener("drop", (event) => {
  if (currentTask().mode !== "drag" || state.busy) return;
  event.preventDefault();
  els.focusTarget.classList.remove("is-drag-over");
  const choiceId = event.dataTransfer.getData("text/plain") || state.selected;
  if (choiceId) validateAction(choiceId);
});

els.focusTarget.addEventListener("click", () => {
  if (currentTask().mode !== "drag" || state.busy) return;
  if (!state.selected) {
    showToast("First select an item from the workbench on the right", "info");
    return;
  }
  validateAction(state.selected);
});

els.hintButton.addEventListener("click", useHint);
els.startButton.addEventListener("click", startExperiment);
els.resetButton.addEventListener("click", () => {
  if (!state.started || window.confirm("Clear the current experimental records and restart?")) {
    resetExperiment(!EMBEDDED);
    if (EMBEDDED) startExperiment();
  }
});
els.resultResetButton.addEventListener("click", () => {
  resetExperiment(false);
  startExperiment();
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;
  if (!event.data || typeof event.data !== "object") return;
  if (event.data.type === "experiment4:get-state") {
    notifyParent();
  }
  if (event.data.type === "experiment4:reset") {
    resetExperiment(false);
    startExperiment();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.resultModal.classList.contains("is-visible")) {
    els.resultModal.classList.remove("is-visible");
  }
});

render();
if (EMBEDDED) startExperiment();
