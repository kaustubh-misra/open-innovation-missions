/**
 * ================================================================
 *  OPEN INNOVATION MATRIX — TEXT & SETTINGS
 * ================================================================
 *  - The matrix ROWS of findings live in:  src/content/matrix-data.json
 *    (one entry per component: program, layer, component, finding,
 *     status, evidence, source, who leads it...)
 *  - Everything else you read around the matrix lives in this file.
 *
 *  Allowed values in matrix-data.json:
 *    status:   "Success" | "Mixed" | "Failure"
 *    evidence: "External" | "Self-reported"
 *    layer:    must match one of the layer names below exactly
 *    lead:     "NGO-led" marks a program as NGO-led
 * ================================================================
 */

import data from "./matrix-data.json";

/* ---------- One row of matrix-data.json ---------- */
export type MatrixRow = {
  id: string;
  order: number;
  program: string;
  where: string;
  sectors: string;
  layer: string;
  component: string;
  finding: string;
  status: "Success" | "Mixed" | "Failure";
  evidence: "External" | "Self-reported";
  sourceLabel: string;
  sourceUrl: string;
  lead: string;
  ngoTest: string;
};

export const matrixRows = data as MatrixRow[];

/* ---------- Section text ---------- */
export const matrixText = {
  title: "Open innovation programs",
  subtitle: "Where they succeeded and failed",
  /* "Results" — shown at the bottom of the Matrix page. One string per paragraph; **bold** works. */
  resultsHeading: "Results",
  results: [
    "**Openness itself is rarely what fails.** Open science and open hardware components mostly succeed (10 of 11, and 7 of 8). Failures cluster in open tech and infrastructure, which holds 7 of the 8 failures and 10 of the 11 mixed results.",
    "**Against the five-question test, the gap is sustainability.** All 8 failures fall short on Sustained: funding, maintenance and stewardship after launch. Only 10 of 46 components meet all five conditions, and all 10 succeeded. Most of them are backed by long-term public or institutional funding, as at EMBL-EBI, CERN and the Sovereign Tech Fund.",
    "**NGO-led projects build open tools and data well, but rarely pass the whole test.** Only 2 of their 18 components meet all five, and 14 fall short on Sustained. Their failures and mixed results sit in staying funded, local ownership, quality, moving from discovery to market and scaling through government.",
  ],
  legend: {
    Success: "Broad success",
    Mixed: "Mixed or contested",
    Failure: "Broad failure",
  },
};

/* ---------- Rows of the matrix (layers of openness) ---------- */
/*  Each row's conditions follow the five common principles on the
 *  Definitions page (src/content/definitions.ts), in the same order:
 *  Open, Fair, Documented, Interoperable, Sustained.
 *  `principle` must match one of those five names exactly.
 */
export type LayerCondition = {
  principle: "Open" | "Fair" | "Documented" | "Interoperable" | "Sustained";
  text: string;
};

export const matrixLayers: {
  name: string;
  quals: LayerCondition[];
  sources: { label: string; url: string }[];
}[] = [
  {
    name: "Open science",
    quals: [
      {
        principle: "Open",
        text: "Publications, data, code and methods are openly available, under licences that permit reuse, including text and data mining",
      },
      { principle: "Fair", text: "Anyone can access them, and societal actors beyond academia can take part" },
      { principle: "Documented", text: "Research practice is transparent and results are reproducible" },
      {
        principle: "Interoperable",
        text: "Data and metadata are findable and use shared standards and vocabularies, so people and machines can reuse them",
      },
      {
        principle: "Sustained",
        text: "Infrastructure is not-for-profit, with permanent access and funding for long-term curation and maintenance",
      },
    ],
    sources: [
      {
        label: "UNESCO Recommendation on Open Science (2021), summary by ITC",
        url: "https://itc.nl/research/way-of-working/open-science/open-science",
      },
      { label: "FAIR Guiding Principles (2016)", url: "https://doi.org/10.1038/sdata.2016.18" },
    ],
  },
  {
    name: "Open hardware and making",
    quals: [
      {
        principle: "Open",
        text: "Anyone may study, modify, distribute, make and sell the design or hardware. Designs a lab lets inventors patent fall short",
      },
      { principle: "Fair", text: "Fabrication tools are open to the public at least part of each week" },
      {
        principle: "Documented",
        text: "Design files are public, in the format preferred for modifying them, with documentation that lets another lab reproduce the work",
      },
      {
        principle: "Interoperable",
        text: "Designs use available materials and standard parts, and are not tied to one tool, supplier or technology",
      },
      {
        principle: "Sustained",
        text: "Hardware is maintainable and repairable, and labs or projects have funding that outlasts the launch grant",
      },
    ],
    sources: [
      { label: "OSHWA Open Source Hardware Definition", url: "https://oshwa.org/definition/" },
      { label: "Fab Foundation criteria and Fab Charter", url: "https://fabfoundation.org/getting-started" },
      { label: "GOSH Manifesto", url: "https://openhardware.science/gosh-manifesto/" },
    ],
  },
  {
    name: "Open tech and infrastructure",
    quals: [
      {
        principle: "Open",
        text: "Source code is available and freely redistributable, and modifications and derived works are allowed",
      },
      { principle: "Fair", text: "No discrimination against persons, groups or fields of use" },
      {
        principle: "Documented",
        text: "Code, interfaces and decisions are documented, so others can deploy, audit and build on the system",
      },
      {
        principle: "Interoperable",
        text: "Systems are interoperable and built on open standards, independent of any single platform",
      },
      {
        principle: "Sustained",
        text: "Governed for public benefit with trust and transparency, and funded for ongoing maintenance and security, not by volunteers alone",
      },
    ],
    sources: [
      { label: "Open Source Definition (OSI)", url: "https://en.wikipedia.org/wiki/The_Open_Source_Definition" },
      { label: "Digital Public Goods Standard (DPGA)", url: "https://www.digitalpublicgoods.net/submission-guide" },
      { label: "Principles of Open Scholarly Infrastructure (POSI)", url: "https://doi.org/10.24343/C34W2H" },
    ],
  },
];

/* ---------- "How to read this matrix" notes ---------- */
export const matrixNotes = [
  {
    term: "Columns and rows",
    text: "Each column is a program. Each row is a layer of openness: open science, open hardware and making, and open tech and infrastructure. A cell lists the program's components in that layer.",
  },
  {
    term: "The test and layer conditions",
    text: "Each component is read against the five-question test above (open, fair, documented, interoperable, sustained), which summarises the principles shared by the frameworks on the Definitions page. Under each layer, the same five principles are spelled out for that layer, numbered to match. Some programs meet them only in part: the Fab Charter lets inventors patent designs, and TechShop offered open access to tools but not open designs or lasting funding.",
  },
  {
    term: "Who leads, and the NGO test",
    text: "Each program is tagged by who leads it. A program counts as NGO-led when a nonprofit controls governance and stewardship of the open outputs, plus at least one of agenda, funding or delivery. Academic partners may still take part. MOSIP is included as a contrast: philanthropy-funded, but hosted and governed by an academic institute. Several NGO-led entries are single organisations rather than coalitions; each column header says how it meets the test.",
  },
  {
    term: "Colours",
    text: "Green and red mark broad success and failure, judged from each program's own reports or from external critiques. Amber is added for components where the evidence is mixed, contested or not yet in, rather than forcing them into success or failure.",
  },
  {
    term: "Evidence type",
    text: "Self-reported means the program, its institution or a commissioned evaluator wrote it. External means peer-reviewed research, government agencies outside the program, or journalism.",
  },
  {
    term: "What is left out",
    text: "This is a selection from the programs discussed, not a census. Many programs have no published failure analysis, so the record leans toward success.",
  },
];

/* ---------- Program websites (shown in each column header) ----------
 *  The name on the left must match "program" in matrix-data.json exactly.
 *  label = the text people see. Leave a program out to show no link.
 */
export const programWebsites: Record<string, { url: string; label: string }> = {
  "Human Genome Project": { url: "https://www.genome.gov/human-genome-project", label: "genome.gov" },
  "Structural Genomics Consortium": { url: "https://www.thesgc.org", label: "thesgc.org" },
  "EMBL-EBI open data and AlphaFold": { url: "https://www.ebi.ac.uk", label: "ebi.ac.uk" },
  "COVID Moonshot": { url: "https://covid.postera.ai/covid", label: "covid.postera.ai" },
  "CSIR Open Source Drug Discovery": {
    url: "https://en.wikipedia.org/wiki/Open_Source_Drug_Discovery",
    label: "Wikipedia (osdd.net offline)",
  },
  "CERN White Rabbit": { url: "https://white-rabbit.web.cern.ch", label: "white-rabbit.web.cern.ch" },
  "Open science hardware (GOSH and open lab equipment)": {
    url: "https://openhardware.science",
    label: "openhardware.science",
  },
  "Fab lab networks": { url: "https://fablabs.io", label: "fablabs.io" },
  TechShop: { url: "https://en.wikipedia.org/wiki/TechShop", label: "Wikipedia (closed 2017)" },
  "Sovereign Tech Fund": { url: "https://www.sovereign.tech", label: "sovereign.tech" },
  "DNDi drug development": { url: "https://dndi.org", label: "dndi.org" },
  "MMV Malaria Box and Pathogen Box": { url: "https://www.mmv.org", label: "mmv.org" },
  "Humanitarian OpenStreetMap Team": { url: "https://www.hotosm.org", label: "hotosm.org" },
  "eGov Foundation DIGIT": { url: "https://egov.org.in", label: "egov.org.in" },
  "Beckn protocol (FIDE)": { url: "https://beckn.io", label: "beckn.io" },
  "MOSIP identity platform": { url: "https://www.mosip.io", label: "mosip.io" },
  Safecast: { url: "https://safecast.org", label: "safecast.org" },
  "Public Lab": { url: "https://publiclab.org", label: "publiclab.org" },
  "Open Source Ecology": { url: "https://www.opensourceecology.org", label: "opensourceecology.org" },
};
