// Import Node Filesystem Module (the callback version)
import fs from "node:fs";

fs.readFile('./data.json', 'utf8', (err, data) => {
  if(err) {
    console.log('Error reading the file');
    throw err;
  }
});
