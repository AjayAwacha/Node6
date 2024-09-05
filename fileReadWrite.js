const fs = require('fs');
const fs2 = require('fs').promises;

console.log('Start');

// read File synchronously
// const fileData = fs.readFileSync('demoFile.txt', 'utf-8');
// console.log('fileData read synchronously', fileData);

// read File asynchronously
// fs.readFile('demoFile.txt', 'utf-8', (err, data) => {
//     console.log('read File asynchronously ', data);
// });

// write data synchronously
// const responce = fs.writeFileSync('demoFile.txt', 'this data is dynamically write in file');
// console.log('data write in file ', responce);

// write data asynchronously
// fs.writeFile('demoFile.txt', 'this data is write in file asynchronously', (err, data) => {
//     console.log('data write in file', data);
// });

// read data using promise based method provided by fs.promise package
async function myData() {
    const data = await fs2.readFile('demoFile.txt', 'utf-8');
    console.log('data ', data);
}
myData();

console.log('End');
