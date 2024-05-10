// Import Node Filesystem Module (the promises version)
import fs from "node:fs/promises";

async function loadData() {
  const data = await fs.readFile('./data.json', 'utf8');
}
