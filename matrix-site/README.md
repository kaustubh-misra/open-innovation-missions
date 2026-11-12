# Open innovation success and failure matrix

A self-contained web page. `index.html` works on its own: open it in a browser or upload it to any static host.

- `index.html` — the page, with the matrix data embedded.
- `data.json` — the same data as a separate file, for editing.

## Using it with Claude Code

Open a terminal in your website's project folder, copy these files in, run `claude`, and ask for what you want, for example:

- "Add the matrix in matrix-site/ to my site as a page at /matrix, matching my site's header, footer and fonts."
- "Deploy matrix-site/ to GitHub Pages."
- "Convert matrix-site/index.html into a React component for my Next.js site, loading data.json."

## Updating the data

Each row in `data.json` is one component: program, layer, component, finding, status (Success, Mixed or Failure), evidence (External or Self-reported), source label and URL, and who leads the program. After editing `data.json`, ask Claude Code: "Sync data.json into the embedded data in index.html."
