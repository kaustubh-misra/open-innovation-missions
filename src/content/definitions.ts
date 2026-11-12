/**
 * ================================================================
 *  DEFINITIONS PAGE — TEXT
 * ================================================================
 *  Source: "Definitions.docx"
 *
 *  How to write text here:
 *    Link:       [words people see](https://example.com)
 *    Bold:       **words**
 *    Italics:    _words_
 *  Keep every piece of text inside "quotes", with a comma after it.
 *
 *  Table: each domain is a group of rows. To add a framework, copy
 *  one { framework, status, definition, values } block inside the
 *  right domain. Each item in `values` shows as its own paragraph.
 * ================================================================
 */

export const definitionsText = {
  title: "What is openness?",
  intro: [
    "Let us analyze some competing definitions of open science (or open research), open tech & digital infrastructure and open hardware & making to understand the various definitions of each of these domains and their values/guiding principles:",
  ],
};

/* Column headings of the table (the domain is shown as a band above its rows) */
export const definitionColumns = [
  "Framework and source",
  "Status",
  "Core definition",
  "Values and guiding principles",
];

export type Definition = {
  framework: string; // name, with its link
  status: string;
  definition: string;
  values: string[];
};

export const definitionDomains: { domain: string; rows: Definition[] }[] = [
  /* ---------- OPEN SCIENCE ---------- */
  {
    domain: "Open science",
    rows: [
      {
        framework:
          "[UNESCO Recommendation on Open Science (2021)](https://unesdoc.unesco.org/ark:/48223/pf0000387983)",
        status: "International standard, adopted by 193 countries",
        definition:
          "A set of principles and practices that make research from all fields accessible to everyone, for the benefit of scientists and society",
        values: [
          "**Values:** quality and integrity; collective benefit; equity and fairness; diversity and inclusiveness.",
          "**Principles:** transparency, scrutiny, critique and reproducibility; equality of opportunities; responsibility, respect and accountability; collaboration, participation and inclusion; flexibility; sustainability",
        ],
      },
      {
        framework: "[FAIR Guiding Principles (Wilkinson et al., 2016)](https://doi.org/10.1038/sdata.2016.18)",
        status: "Standard for research data, endorsed by major funders",
        definition:
          "Measurable qualities of good data publication, for both humans and machines; \"intelligently open\", not open at any cost",
        values: [
          "**Findable:** persistent identifiers, rich metadata.",
          "**Accessible:** standard protocols; metadata outlive data.",
          "**Interoperable:** shared vocabularies and formal languages.",
          "**Reusable:** clear licence, provenance, community standards",
        ],
      },
    ],
  },

  /* ---------- OPEN TECH AND DIGITAL INFRASTRUCTURE ---------- */
  {
    domain: "Open tech and digital infrastructure",
    rows: [
      {
        framework: "[Open Source Definition (OSI)](https://opensource.org/osd)",
        status: "Recognised standard for software licences",
        definition: "Software whose licence meets ten criteria; derived from the Debian Free Software Guidelines",
        values: [
          "Free redistribution; source code available; derived works allowed; integrity of author's source; no discrimination against persons or groups; no discrimination against fields of use; licence applies to all recipients; not product-specific; doesn't restrict other software; technology-neutral",
        ],
      },
      {
        framework: "[Free Software Definition (FSF)](https://www.gnu.org/philosophy/free-sw.html)",
        status: "Ethical counterpart to the OSD",
        definition: "Software that respects users' freedom; framed as an ethical imperative",
        values: [
          "Four freedoms: to run the program for any purpose; to study and change it; to redistribute copies; to distribute modified versions",
        ],
      },
      {
        framework: "[Digital Public Goods Standard (DPGA)](https://www.digitalpublicgoods.net/submission-guide)",
        status: "Main standard for open infrastructure in development",
        definition:
          "Open-source software, data, AI models, standards and content that follow privacy and applicable laws, do no harm, and help attain the SDGs",
        values: [
          "Relevance to the SDGs; approved open licence; clear ownership; platform independence; documentation; mechanism for extracting data; privacy and applicable laws; standards and best practices; do no harm by design",
        ],
      },
      {
        framework: "[Principles of Open Scholarly Infrastructure (POSI)](https://doi.org/10.24343/C34W2H)",
        status: "De facto standard for governing open infrastructure",
        definition:
          "Infrastructure that is community-controlled and \"forkable\", so the community can recreate it if it fails or is captured",
        values: [
          "**Governance:** stakeholder-governed; non-discriminatory membership; transparent operations; cannot lobby; living will; incentives to wind down.",
          "**Sustainability:** time-limited funds for time-limited work; aim for surplus and a contingency fund; revenue from services, not data.",
          "**Insurance:** open source; open data; available data; patent non-assertion",
        ],
      },
    ],
  },

  /* ---------- OPEN HARDWARE AND MAKING ---------- */
  {
    domain: "Open hardware and making",
    rows: [
      {
        framework: "[Open Source Hardware Definition (OSHWA)](https://oshwa.org/definition/)",
        status: "Main standard for open hardware",
        definition:
          "Hardware whose design is public so anyone can study, modify, distribute, make and sell it; design files shared in the format preferred for modification",
        values: [
          "Documentation; scope; necessary software; derived works; free redistribution; attribution; no discrimination against persons, groups or fields of use; licence applies to all; not product-specific; doesn't restrict other hardware or software; technology-neutral",
        ],
      },
      {
        framework: "[CERN Open Hardware Licence v2](https://ohwr.org/cern_ohl_s_v2.txt)",
        status: "Legal instrument for open hardware",
        definition: "Licences that put open hardware principles into practice",
        values: [
          "Three strengths: permissive (P); weakly reciprocal (W); strongly reciprocal (S), which requires derivatives to stay open",
        ],
      },
      {
        framework: "[GOSH Manifesto](https://openhardware.science/gosh-manifesto/)",
        status: "Community statement for open science hardware",
        definition: "Reducing barriers between creators and users of scientific tools",
        values: [
          "Accessible; makes science better; ethical; changes the culture of science; democratises science; no high priests; empowers people; no black boxes; impactful tools; allows multiple futures for science.",
          "Practical principles: low-cost, available materials; maintainable and repairable",
        ],
      },
      {
        framework: "[Fab Charter (Fab Foundation)](https://fabfoundation.org/getting-started)",
        status: "Community charter for open making spaces",
        definition: "Fab labs as shared spaces for digital fabrication, part of a global network",
        values: [
          "Public access to tools, at least part of each week; shared knowledge and designs; documentation so other labs can reproduce work; designs stay available to learn from, even if protected",
        ],
      },
    ],
  },
];

/* ---------- Notes under the table ---------- */
export const definitionNotes = [
  "**The \"core definition\" column** shows a split. The licence-based frameworks (OSD, FSF, OSHWA, CERN OHL) define what the output must allow. The broader frameworks (UNESCO, DPG, POSI, GOSH, Fab Charter) add how it should be governed, funded and used, and who it should serve.",
  "**The \"status\" column** shows authority. UNESCO is the only one adopted by governments. The OSD, OSHWA and FAIR are recognised standards in their fields. GOSH and the Fab Charter are community statements.",
];

/* ---------- Common principles (shown below the notes) ----------
 *  A summary of what the "Values and guiding principles" column shares
 *  (shown on the Definitions page). The `test` list is shown above the
 *  matrix on the Matrix page, as the test each component is read against.
 */
export const commonPrinciples = {
  heading: "Common principles",
  summaryIntro: "Across all ten frameworks, five principles recur:",
  principles: [
    { name: "Open", text: "anyone may access, use, study, change and share the work under a clear open licence." },
    { name: "Fair", text: "no person, group or field of use is excluded, and people beyond the original creators can take part." },
    { name: "Documented", text: "the work is transparent enough for others to find, reproduce and build on it." },
    { name: "Interoperable", text: "it rests on shared standards and is not tied to one platform, product or supplier." },
    {
      name: "Sustained",
      text: "it is governed accountably for the public benefit, funded and maintained beyond the life of a single project, and designed to do no harm.",
    },
  ],
  /* The test below is shown above the matrix on the Matrix page */
  testIntro: "A component counts as open innovation when it can answer yes to all five:",
  test: [
    { name: "Open", question: "Can anyone access, use, study, modify and share it under an open licence?" },
    { name: "Fair", question: "Is it available to all, without excluding persons, groups or fields of use?" },
    { name: "Documented", question: "Is it documented well enough for others to find, reproduce and build on it?" },
    { name: "Interoperable", question: "Does it use shared standards, rather than locking users into one platform or supplier?" },
    { name: "Sustained", question: "Is it governed accountably for public benefit, with the means to keep it running?" },
  ],
};
