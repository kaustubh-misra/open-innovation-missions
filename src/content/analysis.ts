/**
 * ================================================================
 *  ANALYSIS PAGE — TEXT & THEME ASSIGNMENTS
 * ================================================================
 *  The tables on the Analysis page are built from:
 *    - matrix-data.json   (the 48 components and their outcomes)
 *    - THEMES below       (the recurring themes)
 *    - themeOf below      (which theme each component belongs to)
 *
 *  Counts in the tables update automatically when the data changes.
 *  The written findings (keyFindings, themes' text) do NOT — if you
 *  change the data, re-read them and update the numbers by hand.
 * ================================================================
 */

export const analysisText = {
  title: "Analysis",
  caveats: [
    "Each component is placed in one primary theme; some could reasonably sit in two.",
    "The matrix is a selection, not a census. Many programs publish no failure analysis, so the record leans toward success.",
    "Roughly a third of findings are self-reported by the program, its institution or a commissioned evaluator.",
  ],
};

/* ---------- Headline findings ----------
 *  title = the bold first line of each tile; text = the rest.
 */
export const keyFindings = [
  {
    title: "Openness reliably creates value at the start.",
    text: "Open science components almost always succeed. Releasing genomes, protein data, compound sets, designs and protocols consistently produces follow-on research, new uses and outside contributors.",
  },
  {
    title: "Failure happens afterwards, in the infrastructure layer.",
    text: "The red and amber cards cluster in maintenance (xz Utils, volunteer-run software), funding continuity (OSDD, Public Lab, TechShop), moving from discovery to real-world use (OSDD, MMV, the Moonshot), local ownership (HOT) and quality assurance (open hardware validation, Safecast). These are failures of stewardship, not of openness.",
  },
  {
    title: "Success depends on who holds the commons.",
    text: "The strongest programs have a trusted, long-lived steward with patient funding: EMBL-EBI, CERN, DNDi, the Sovereign Tech Fund. Where no one is clearly responsible after creation, things decay, whatever the type of organisation.",
  },
  {
    title: "Open data and research are the connective tissue.",
    text: "They mostly work as horizontals, linking science, making and infrastructure. They travel well outward from a trusted source, and stall when they need to cross into costly, regulated or local settings.",
  },
  {
    title: "NGO-led projects are good builders, weaker sustainers.",
    text: "They excel at creating open tools and data, and struggle most with local ownership, scaling through government and staying funded.",
  },
  {
    title: "Being open is not the same as doing good.",
    text: "A component can be fully open (licensed for reuse and available to all) and still fail on outcomes, because collective benefit depends on governance, ownership and funding, not licences.",
  },
];

/* ---------- Themes ----------
 *  key       = short id used in themeOf below
 *  band      = "struggle" (has failures or mixed results) or "success"
 *  pattern   = how it goes wrong
 *  worked    = counter-examples that succeeded
 *  lesson    = one-line takeaway
 */
export const THEMES = [
  {
    key: "funding",
    name: "Funding and business model",
    band: "struggle",
    pattern:
      "Organisations run out of money or rely on uncertain renewals. TechShop's membership model went bankrupt; Public Lab ended staff-run operations; SGC evaluators flagged funding uncertainty.",
    worked: "Sovereign Tech Fund: dedicated public money (about €23.5m) for critical open source.",
    lesson: "Plan who pays after launch before launch.",
  },
  {
    key: "maintenance",
    name: "Maintenance and stewardship",
    band: "struggle",
    pattern:
      "Critical shared components depend on unpaid or burnt-out maintainers, as the xz Utils backdoor near-miss exposed.",
    worked: "EMBL-EBI: an institution funded to curate and maintain open data, returning about 108 times its cost.",
    lesson: "Open infrastructure needs a paid steward, not just contributors.",
  },
  {
    key: "translation",
    name: "Discovery to market",
    band: "struggle",
    pattern:
      "Open discovery produces candidates, but late-stage development needs scarce expertise and large, steady funding. OSDD stalled; Moonshot and MMV have not yet produced approved drugs.",
    worked: "DNDi: a nonprofit ran the clinical trials and partnered with Sanofi to manufacture fexinidazole.",
    lesson: "Someone must own the expensive last mile.",
  },
  {
    key: "community",
    name: "Community participation and local ownership",
    band: "struggle",
    pattern:
      "Opening access does not make people share or take ownership. Manchester fab lab users hoarded knowledge; HOT's Mozambique data came mostly from abroad; few Open Source Ecology builders contribute back.",
    worked: "Eastern European fab labs adapted shared rules locally; OSDD's clear entry points drew in contributors; GOSH convening catalysed activity.",
    lesson: "Design for local leadership and contribution, not only access.",
  },
  {
    key: "quality",
    name: "Quality and validation",
    band: "struggle",
    pattern:
      "Open and citizen-made outputs vary in quality with no way to certify them. Open lab devices had no validation tracking; Safecast's volunteer measurements raised QA concerns; HOT slum mapping ranged from 84% to 0% complete.",
    worked: "CERN White Rabbit: a testing committee and collaboration trademark qualify products. Safecast data compared well with official surveys.",
    lesson: "Build a visible validation mechanism alongside the open output.",
  },
  {
    key: "adoption",
    name: "Adoption and scaling",
    band: "struggle",
    pattern:
      "Formal adoption does not guarantee use. DIGIT has agreements covering 32 of 36 states and territories but live dashboard data from 16; ONDC orders fell from 65 lakh to 45 lakh in four months.",
    worked: "DIGIT's code became the National Urban Governance Platform, deployed across 2,421 cities; White Rabbit entered an IEEE standard; MOSIP reports 14 national rollouts.",
    lesson: "Track real usage, not signed agreements.",
  },
  {
    key: "evidence",
    name: "Evidence of impact",
    band: "struggle",
    pattern:
      "Headline impact figures rest on contested or sponsor-commissioned methods: the $796bn genome estimate, the $8.8tn open source estimate, and unproven environmental benefits of makerspaces.",
    worked: "Peer-reviewed studies with clear methods, such as Williams (2013) on gene patents.",
    lesson: "Treat large impact numbers as claims until independently tested.",
  },
  {
    key: "governance",
    name: "Governance and safeguards",
    band: "struggle",
    pattern: "Open platforms deployed where laws are weak can enable harm, such as MOSIP's surveillance and profiling risks.",
    worked: "SGC as a boundary organisation balancing firms, academics and funders; Beckn's governance let it grow into several networks.",
    lesson: "Pair open technology with rules on how it may be used.",
  },
  {
    key: "release",
    name: "Open release of outputs",
    band: "success",
    pattern: "No failures recorded.",
    worked: "Genome data, protein structures, AlphaFold training data, Moonshot designs, MMV compound results, Safecast designs and HOT disaster maps.",
    lesson: "Releasing openly is the most dependable part of open innovation.",
  },
  {
    key: "access",
    name: "Low cost and access to tools",
    band: "success",
    pattern: "No failures recorded.",
    worked: "Open lab equipment, TechShop's tools, Public Lab's kits and Open Source Ecology's machines at a fraction of commercial cost.",
    lesson: "Open designs reliably cut the cost of tools.",
  },
] as const;

export type ThemeKey = (typeof THEMES)[number]["key"];

/* ---------- Which theme each component belongs to ----------
 *  Left: the component "id" from matrix-data.json. Right: a theme key.
 *  Components not listed here appear under "Unassigned".
 */
export const themeOf: Record<string, ThemeKey> = {
  // Open science
  "hgp-sci": "release",
  "sgc-sci": "release",
  "ebi-sci": "release",
  "moon-sci": "release",
  "osdd-sci": "community",
  "wr-sci": "release",
  "osh-sci": "access",
  "dndi-sci": "translation",
  "mmv-sci": "release",
  "hot-sci": "quality",
  "sc-sci": "quality",
  // Open hardware and making
  "wr-mak": "quality",
  "osh-mak": "community",
  "fab-ee": "community",
  "fab-mcr": "community",
  "ts-mak": "access",
  "sc-mak": "release",
  "pl-mak": "access",
  "ose-mak": "access",
  // Open tech and infrastructure
  "hgp-inf": "evidence",
  "sgc-gov": "governance",
  "sgc-fund": "funding",
  "ebi-inf": "maintenance",
  "moon-inf": "translation",
  "osdd-inf": "translation",
  "wr-inf": "adoption",
  "osh-inf": "quality",
  "fab-inf": "evidence",
  "ts-inf": "funding",
  "oss-val": "evidence",
  "oss-xz": "maintenance",
  "oss-vol": "maintenance",
  "stf-inf": "funding",
  "dndi-inf": "translation",
  "mmv-inf": "translation",
  "hot-inf": "release",
  "hot-loc": "community",
  "egov-inf": "adoption",
  "egov-roll": "adoption",
  "beckn-inf": "governance",
  "beckn-ondc": "adoption",
  "mosip-inf": "adoption",
  "mosip-priv": "governance",
  "sc-qa": "quality",
  "pl-inf": "funding",
  "ose-inf": "community",
};
