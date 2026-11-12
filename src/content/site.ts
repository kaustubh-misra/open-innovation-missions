/**
 * ================================================================
 *  SITE CONTENT — EDIT THE WORDS ON THE PAGE HERE
 * ================================================================
 *  You do NOT need to touch any other file to change the text.
 *  Rules:
 *   - Keep the quotes "..." around every piece of text.
 *   - Keep the comma at the end of each line.
 *   - To add a spec row, copy a { label: "...", value: "..." },
 *     line and change the words.
 * ================================================================
 */

export const site = {
  /* ---------- TOP HEADER ---------- */
  header: {
    agency: "LAPD",
    unit: "BLADE RUNNER DIV. // KD6-3.7",
    timeLabel: "UTC",
  },

  /* ---------- AUDIO ---------- */
  audio: {
    // The sound file must be inside the /public folder.
    src: "/drone.mp3",
  },

  /* ---------- CENTRE HERO ---------- */
  hero: {
    eyebrow: "SECTOR 09 // LOS ANGELES 2049",
    title: "WALLACE INDUSTRIAL",
    subtitle: "Replicant manufacture & off-world colonial supply",
  },

  /* ---------- SYSTEM SPECS PANEL ---------- */
  panel: {
    title: "SYS.STATUS",
    code: "REF 77-B / NEXUS-9",
    specs: [
      { label: "MODEL SERIES", value: "NEXUS-9" },
      { label: "COMPLIANCE INDEX", value: "99.82%" },
      { label: "BASELINE DEVIATION", value: "0.003" },
      { label: "INCEPT DATE", value: "2049.06.10" },
      { label: "ATMOS. PARTICULATE", value: "418 PPM" },
      { label: "VISIBILITY", value: "0.8 KM" },
    ],
    footer: "AWAITING INPUT",
  },

  /* ---------- BOTTOM COORDINATE STRIP ---------- */
  coordinates: [
    "LAT 34.0522 N",
    "LON 118.2437 W",
    "ALT 412 M",
    "TEMP 31.4 C",
  ],
};
