// Import Node Filesystem Module (the promises version)
import fs from 'node:fs/promises';

async function loadData() {
	const data = await fs.readFile('./data.json', 'utf8'); // the promise will need to complete and then it will execute the next steps that are listed in the code
	const dataObj = JSON.parse(data);
	console.log(dataObj);
	console.log('Complete');
}

loadData().then(() => console.log("Promise completed"));
