/**
 * ================================================================
 *  TEST RESULTS — each component checked against its row's conditions
 * ================================================================
 *  The five conditions are the common principles on the Definitions
 *  page, written out per layer in `matrixLayers` (src/content/matrix.ts).
 *
 *  For each component (by its id in matrix-data.json), five marks in
 *  this order:   Open, Fair, Documented, Interoperable, Sustained
 *
 *    "Y"  = meets the condition
 *    "P"  = partly meets it
 *    "N"  = does not meet it
 *    "-"  = does not apply to this component
 *
 *  `note` explains any P or N marks. These are editorial judgements
 *  based on each component's finding and source; edit them freely.
 *  Counts on the Matrix and Analysis pages update automatically.
 * ================================================================
 */

export type Mark = "Y" | "P" | "N" | "-";
export type TestResult = { marks: [Mark, Mark, Mark, Mark, Mark]; note?: string };

export const PRINCIPLE_NAMES = ["Open", "Fair", "Documented", "Interoperable", "Sustained"] as const;

export const testResults: Record<string, TestResult> = {
  /* ---------- Human Genome Project ---------- */
  "hgp-sci": { marks: ["Y", "Y", "Y", "Y", "Y"] },
  "hgp-inf": { marks: ["Y", "Y", "Y", "Y", "Y"] },

  /* ---------- Structural Genomics Consortium ---------- */
  "sgc-sci": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: continued public funding was uncertain.",
  },
  "sgc-gov": {
    marks: ["Y", "P", "P", "-", "Y"],
    note: "Fair: industry funders hold governance seats. Documented: governance decisions are not fully public.",
  },
  "sgc-fund": {
    marks: ["Y", "Y", "-", "-", "P"],
    note: "Sustained: evaluators flagged uncertainty over continued funding.",
  },

  /* ---------- EMBL-EBI open data and AlphaFold ---------- */
  "ebi-sci": { marks: ["Y", "Y", "Y", "Y", "Y"] },
  "ebi-inf": { marks: ["Y", "Y", "Y", "Y", "Y"] },

  /* ---------- COVID Moonshot ---------- */
  "moon-sci": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: ran on crowdfunding and time-limited grants.",
  },
  "moon-inf": {
    marks: ["Y", "Y", "Y", "-", "P"],
    note: "Sustained: no secured funding yet to carry a candidate through clinical trials.",
  },

  /* ---------- CSIR Open Source Drug Discovery ---------- */
  "osdd-sci": {
    marks: ["Y", "Y", "Y", "P", "P"],
    note: "Interoperable: no shared data standard across contributors. Sustained: depended on government funding renewals.",
  },
  "osdd-inf": {
    marks: ["Y", "Y", "P", "-", "N"],
    note: "Documented: late-stage work was not openly reported. Sustained: stalled when funding renewal was delayed.",
  },

  /* ---------- CERN White Rabbit ---------- */
  "wr-sci": { marks: ["Y", "Y", "Y", "Y", "Y"] },
  "wr-mak": { marks: ["Y", "Y", "Y", "Y", "Y"] },
  "wr-inf": { marks: ["Y", "Y", "Y", "Y", "Y"] },

  /* ---------- Open science hardware (GOSH and open lab equipment) ---------- */
  "osh-sci": {
    marks: ["Y", "Y", "Y", "P", "P"],
    note: "Interoperable: designs use mixed formats and parts. Sustained: most projects rely on short grants.",
  },
  "osh-mak": {
    marks: ["Y", "Y", "P", "P", "P"],
    note: "Documented and Interoperable: documentation and parts vary between projects. Sustained: GOSH relies on grant funding.",
  },
  "osh-inf": {
    marks: ["Y", "Y", "N", "N", "N"],
    note: "Documented and Interoperable: no shared way to record or track validation. Sustained: no one funded to maintain it.",
  },

  /* ---------- Fab lab networks ---------- */
  "fab-ee": {
    marks: ["P", "Y", "P", "Y", "P"],
    note: "Open: the Fab Charter lets inventors protect designs. Documented: documentation varies by lab. Sustained: labs depend on local funding.",
  },
  "fab-mcr": {
    marks: ["N", "P", "N", "-", "P"],
    note: "Open and Documented: users kept time, knowledge and designs to themselves. Fair: access was offered, but not taken up as shared. Sustained: depended on host funding.",
  },
  "fab-inf": {
    marks: ["-", "-", "N", "-", "P"],
    note: "Documented: little empirical evidence backs the sustainability claims. Sustained: environmental benefit unproven.",
  },

  /* ---------- TechShop ---------- */
  "ts-mak": {
    marks: ["N", "P", "N", "Y", "N"],
    note: "Open and Documented: members' designs were not shared. Fair: access required a paid membership. Sustained: closed in 2017.",
  },
  "ts-inf": {
    marks: ["N", "P", "-", "-", "N"],
    note: "Open: a closed, for-profit business. Fair: paid membership only. Sustained: bankrupt in 2017.",
  },

  /* ---------- Open-source software ecosystem ---------- */
  "oss-val": {
    marks: ["Y", "Y", "P", "Y", "P"],
    note: "Documented: value estimates rely on contested methods. Sustained: value is not matched by maintenance funding.",
  },
  "oss-xz": {
    marks: ["Y", "Y", "P", "Y", "N"],
    note: "Documented: maintainer handover was not transparent. Sustained: one burnt-out volunteer maintained a critical component.",
  },
  "oss-vol": {
    marks: ["Y", "Y", "P", "Y", "N"],
    note: "Documented: documentation is uneven. Sustained: relies on unpaid volunteers.",
  },

  /* ---------- Sovereign Tech Fund ---------- */
  "stf-inf": { marks: ["Y", "Y", "Y", "Y", "Y"] },

  /* ---------- DNDi drug development ---------- */
  "dndi-sci": {
    marks: ["P", "Y", "P", "-", "Y"],
    note: "Open: DNDi keeps IP to secure access rather than using open licences. Documented: not all data are released.",
  },
  "dndi-inf": {
    marks: ["P", "Y", "Y", "-", "Y"],
    note: "Open: fexinidazole is made by Sanofi, not under an open licence.",
  },

  /* ---------- MMV Malaria Box and Pathogen Box ---------- */
  "mmv-sci": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: the boxes were time-limited and have been discontinued.",
  },
  "mmv-inf": {
    marks: ["Y", "Y", "P", "-", "P"],
    note: "Documented: follow-on programmes report unevenly. Sustained: no funded path from starting point to drug.",
  },

  /* ---------- Humanitarian OpenStreetMap Team ---------- */
  "hot-sci": {
    marks: ["Y", "P", "P", "Y", "P"],
    note: "Fair and Documented: completeness ranged from 84% to zero across sites. Sustained: relies on volunteer mappers.",
  },
  "hot-inf": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: campaigns depend on project funding and volunteers.",
  },
  "hot-loc": {
    marks: ["Y", "N", "N", "Y", "N"],
    note: "Fair: local communities were left out. Documented: data lacked place names. Sustained: no local ownership to keep it up to date.",
  },

  /* ---------- eGov Foundation DIGIT ---------- */
  "egov-inf": { marks: ["Y", "Y", "Y", "Y", "Y"] },
  "egov-roll": {
    marks: ["Y", "P", "P", "Y", "P"],
    note: "Fair: uneven rollout across states. Documented: live data from only 16 states. Sustained: depends on each state's commitment.",
  },

  /* ---------- Beckn protocol (FIDE) ---------- */
  "beckn-inf": { marks: ["Y", "Y", "Y", "Y", "Y"] },
  "beckn-ondc": {
    marks: ["Y", "Y", "P", "Y", "P"],
    note: "Documented: limited public data on network use. Sustained: orders fell sharply once incentives eased.",
  },

  /* ---------- MOSIP identity platform ---------- */
  "mosip-inf": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: funded largely by philanthropy.",
  },
  "mosip-priv": {
    marks: ["Y", "N", "P", "Y", "N"],
    note: "Fair: surveillance and profiling risks for people in adopting countries. Documented: safeguards vary by country. Sustained: not designed to do no harm where laws are weak.",
  },

  /* ---------- Safecast ---------- */
  "sc-sci": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: runs on donations and volunteers.",
  },
  "sc-mak": {
    marks: ["Y", "Y", "Y", "Y", "P"],
    note: "Sustained: kit supply depends on a small nonprofit.",
  },
  "sc-qa": {
    marks: ["Y", "Y", "P", "P", "P"],
    note: "Documented and Interoperable: volunteer measurements do not follow metrology standards. Sustained: no funded QA programme.",
  },

  /* ---------- Public Lab ---------- */
  "pl-mak": {
    marks: ["Y", "Y", "Y", "Y", "N"],
    note: "Sustained: the organisation stopped staff-run operations in 2023.",
  },
  "pl-inf": {
    marks: ["Y", "Y", "P", "-", "N"],
    note: "Documented: little public account of why operations ended. Sustained: ceased formal operations in April 2023.",
  },

  /* ---------- Open Source Ecology ---------- */
  "ose-mak": {
    marks: ["Y", "Y", "P", "Y", "P"],
    note: "Documented: blueprints are incomplete for many machines. Sustained: depends on the founder and donations.",
  },
  "ose-inf": {
    marks: ["Y", "P", "P", "Y", "P"],
    note: "Fair: few builders take part in design. Documented: builds are rarely written up. Sustained: the founder remains the main designer.",
  },
};

/* ---------- Helpers (no need to edit) ---------- */
export const passesAll = (id: string) => testResults[id]?.marks.every((m) => m === "Y" || m === "-") ?? false;
export const shortfalls = (id: string) =>
  (testResults[id]?.marks ?? []).filter((m) => m === "P" || m === "N").length;
