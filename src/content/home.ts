/**
 * ================================================================
 *  HOME PAGE — TEXT
 * ================================================================
 *  Source: "Open Innovation_v1.docx"
 *
 *  How to write text here:
 *    Link:       [words people see](https://example.com)
 *    Footnote:   [^1]   (number must match one in `footnotes` below)
 *    Italics:    _words_
 *  Keep every piece of text inside "quotes", with a comma after it.
 * ================================================================
 */

export const homeHero = {
  title: "Open Innovation",
};

/* A paragraph heading followed by its text (used in section 1). */
export type HomeItem = { heading: string; text: string };

export type HomeSection = {
  id: string; // used for the jump links under the title (no spaces)
  heading: string;
  paragraphs: string[]; // plain paragraphs, shown first
  items?: HomeItem[]; // optional paragraphs with their own headings
};

export const homeSections: HomeSection[] = [
  /* ---------- SECTION 1 ---------- */
  {
    id: "history",
    heading: "A brief history of commons-oriented open innovation missions",
    paragraphs: [
      "Open innovation has a surprisingly long history, one where genuine technological progress has always leaned on shared infrastructure, common knowledge, and collective effort. However, innovation has largely come with tradeoffs (atomic bombs were inventive but not beneficial, smallpox eradication was beneficial but not inventive), and so for our study, we develop a rudimentary test for open innovation missions: they should be both largely beneficial to humanity & inventive. We add another condition of infrastructural, as infrastructure generates diffused value over time both through direct use and use of a platform to create derivative value[^1]. When subject to the following conditions, some mission led innovation projects which have yielded immense gain to humanity over time are[^2]:",
    ],
    items: [
      {
        heading: "[The Longitude Act of 1714](https://en.wikipedia.org/wiki/Longitude_Act)",
        text: "The British Board of Longitude had offered a reward of £20,000 to anyone who could solve the “longitude problem” by providing a device or technique to allow someone on board ship to determine their longitude accurately. John Harrison’s marine chronometer solved it. Notably, the Board required openness: Harrison was required to turn over his clocks to the Board of Longitude for testing, and detailed drawings were published by the Board as The Principles of Mr. Harrison’s Timekeeper (1767). The prize model itself became infrastructure: the Longitude rewards became a model for government-sponsored attempts to encourage innovation.",
      },
      {
        heading: "[CGIAR development & the Green Revolution](https://gwern.net/doc/economics/2003-evenson.pdf)",
        text: "Facing recurring post-colonial famines and demographic surges in South Asia and Latin America, the Rockefeller and Ford Foundations, in coordination with the Mexican and Indian governments, funded a coordinated breeding mission to develop high-yielding, rust-resistant staple crops. In 1971, this network was institutionalized as the CGIAR (Consultative Group on International Agricultural Research). It created a globally accessible public germplasm commons and seed-bank network., and tripled harvest yields per hectare that averted mass famine and decoupled grain production from proportional land expansion.",
      },
      {
        heading: "[ARPANET](https://www.cs.unc.edu/~jbs/resources/Internet/internet_chron.html)",
        text: "Initiated by the Advanced Research Projects Agency’s (DARPA) Information Processing Techniques Office (IPTO) under J.C.R. Licklider, Bob Taylor, and Larry Roberts, the mission aimed to build a robust, survivable, distributed communications network allowing geographically dispersed research computers to share compute cycles. Paul Baran and Donald Davies’ theoretical concept of packet switching was transformed into physical hardware via BBN’s Interface Message Processors (IMPs). When network scaling created throughput limits, Vint Cerf and Bob Kahn engineered the TCP/IP protocol suite to inter-connect heterogeneous networks.The transition of ARPANET to TCP/IP on January 1, 1983, established the structural foundation of the Internet, and the mission birthed the Request for Comments (RFC) model: an open, consensus-driven standard-setting mechanism.",
      },
      {
        heading: "[The World Wide Web](https://web30.web.cern.ch/web-history.html)",
        text: "High-energy physicists at CERN faced an administrative and computational crisis: thousands of international researchers from hundreds of universities, using incompatible operating systems and hardware, needed to share documents, datasets, and experiment protocols across the Large Electron-Positron Collider (LEP). Tim Berners-Lee synthesized hypertext, the Domain Name System (DNS), and TCP/IP sockets to engineer HTTP (Hypertext Transfer Protocol), HTML (Hypertext Markup Language), the URI/URL system, and the first browser/editor (WorldWideWeb). CERN published the entire Web source code and basic communication protocols into the public domain, royalty-free forever.",
      },
      {
        heading: "The Rural Automatic Exchange (RAX)",
        text: "In the early 80s, India’s telephone density was at 0.4 per 100 people with a virtually non-existent rural connectivity. Multinational vendors (Siemens, Alcatel, Ericsson) insisted that telecom modernization required multi-million-dollar imported digital switches that mandated 24/7 air-conditioned, dust-free environments and steady grid power[^3]. In 1984, the Government of India established the Centre for Development of Telematics (C-DOT) under Sam Pitroda and G.B. Meemamsi with a 36-month cabinet mandate: design an indigenous, low-cost digital switching system tailored specifically to India’s environmental realities. C-DOT engineered the 128-line Rural Automatic Exchange (RAX), built entirely with solid-state components designed for passive convection cooling, operating reliably at ambient temperatures up to 50°C and relative humidity up to 95%, and able to absorb wide voltage fluctuations and operating during long rural power outages[^4]. It had a distributed processing architecture that allowed local technicians with minimal schooling to diagnose faults and swap modular line cards without taking down the network. C-DOT transferred the manufacturing blueprints non-exclusively to over 30 private and public domestic manufacturers (including BEL, ITI, and Crompton Greaves), driving down the cost per line from over $1,000 (foreign imports) to under $100.",
      },
    ],
  },

  /* ---------- SECTION 2 ---------- */
  {
    id: "openness",
    heading: "The Rise, Fall & Rise of Openness",
    paragraphs: [
      "Openness as a principle has been a core part of many such missions, majorly through infrastructure. But infrastructure can be broad: hardware, blueprints, processes, or knowledge. In some cases, openness appears as an outcome-oriented choice, even within otherwise closed mission systems (such as GPS). In other cases, there’s a structural reason for openness: before 1980, and throughout much of the twentieth century, universities in the US largely avoided patenting & licencing activities because of their commitments to open science and their institutional missions to advance and disseminate knowledge[^5]. The US government’s [Bayh-Dole Act of 1980](https://en.wikipedia.org/wiki/Bayh%E2%80%93Dole_Act) sought to facilitate patenting and licensing by US universities of inventions based on federally funded research, and it was followed by significant growth in patenting and licensing by US universities[^6]. The causal effect is debated, [research](https://scispace.com/pdf/the-bayh-dole-act-of-1980-and-university-industry-technology-2i78nj0iyt.pdf) suggests Bayh–Dole was only one of several important factors behind the rise of university patenting and licensing activity. Still, directionally, the 1980s moved public science toward closed systems, and other OECD countries later copied the model.",
      "However, major innovation missions through the 80s and the 90s continued to have openness as a principle: [The Free Software Movement](https://www.fsf.org/about/what-is-free-software), [CERN and the World Wide Web](https://web30.web.cern.ch/web-history.html), [The Human Genome Project](https://www.genome.gov/human-genome-project) & [The Bermuda Principles](https://bermudaprinciples.org/). In some cases such as software, foundations have emerged as boundary organizations which hold stewardship of open movements, such as the [Free Software Foundation](https://www.fsf.org/) & the [Linux Foundation](https://www.linuxfoundation.org/). On the other hand, many universities continue to steward major open infrastructure: Cornell has hosted [arXiv](https://arxiv.org/) since 2001, and IIIT Bangalore hosts [MOSIP](https://www.mosip.io/mosip_project). Some open innovation projects are stewarded by intergovernmental research organizations (cross border) such as [CERN White Rabbit](https://white-rabbit.web.cern.ch/) & [EMBL’s European Bioinformatics Institute (EMBL-EBI)](https://www.ebi.ac.uk/), as well as government research bodies such as [CSIR Open Source Drug Discovery](https://en.wikipedia.org/wiki/Open_Source_Drug_Discovery) & [Sovereign Tech Fund](https://www.sovereign.tech/programs/fund). Mission-driven non-profits such as [The Humanitarian Open Street Map](https://www.hotosm.org/en/) & [Beckn Protocol](https://beckn.io/) by [FIDE](https://fide.org/) are also stewards, and so are community networks such as the [Fab Labs network](https://www.fablabs.io/) & the broader FOSS movement (represented by [India FOSS](https://fossunited.org/)).",
    ],
  },
];

/* ---------- Footnotes (numbered to match [^1] … [^6] above) ---------- */
export const footnotes: Record<string, string> = {
  "1": "Frischmann, Brett M. (2005). _An Economic Theory of Infrastructure and Commons Management_, 89 Minn. L. Rev. 917. Available at: [https://doi.org/10.24926/265535.1573](https://doi.org/10.24926/265535.1573).",
  "2": "This list is not exhaustive.",
  "3": "Pitroda, S. (1993). _Development, Democracy, and the Village Telephone Harvard Business Review_. Retrieved November 10, 2026, from [http://sampitroda.squarespace.com/s/HBR.pdf](http://sampitroda.squarespace.com/s/HBR.pdf).",
  "4": "Ray, P. K., & Ray, S. (2010). _Resource-constrained innovation for emerging economies: The case of the Indian telecommunications industry_. IEEE Transactions on Engineering Management, 57(1), 144–156. [https://doi.org/10.1109/tem.2009.2033044](https://doi.org/10.1109/tem.2009.2033044).",
  "5": "Sampat, B. N. (2003). _Patents and public research in the twentieth century._ Georgia Institute of Technology. [https://www.card.iastate.edu/research/science-and-technology/papers/SAMPAT-Nov-03.pdf](https://www.card.iastate.edu/research/science-and-technology/papers/SAMPAT-Nov-03.pdf)",
  "6": "Mowery, D. C., & Sampat, B. N. (2004). _The Bayh-Dole Act of 1980 and University-Industry Technology Transfer: A Model for Other OECD Governments?_ The Journal of Technology Transfer, 30, 115–127. [https://doi.org/10.1007/s10961-004-4361-z](https://doi.org/10.1007/s10961-004-4361-z)",
};
