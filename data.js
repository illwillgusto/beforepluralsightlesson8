import fs from 'node:fs/promises';

// Loading and writing data to the filesystem ----------------------------

const loadData = async () => {
  console.log("Loading employees.....");
  try {
    const fileData = await fs.readFile('./data.json');
    employees = JSON.parse(fileData);
  } catch (err) {
    console.error("Cannot load in employees");
    throw err;
  }
}

const writeData = async () => {
  console.log("Writing employees.....");
  try {
    await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
  } catch (err) {
    console.error("Cannot write employees data.");
    throw err;
  }
}