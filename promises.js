// Import Node Filesystem Module (the callback version)
import fs from "node:fs/promises";

// Reading the file with the promises API
fs.readFile('./data.json', 'utf8')
  .then(data => {
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Complete");
  })
