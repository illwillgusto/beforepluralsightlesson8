// Import Node Filesystem Module (the promises version)
import fs from 'node:fs/promises';

async function loadData() {
  try {
    const data = await fs.readFile('./data.json', 'utf8'); // the promise will need to complete and then it will execute the next steps that are listed in the code
		const dataObj = JSON.parse(data);
		console.log(dataObj);
		console.log('Complete');
  } catch (error) {
    console.log("Could not load and parse file");
    throw err;

  }

}

loadData().then(() => console.log("Promise completed"));
