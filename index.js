const os = require('os');
const path = require('path')

const platform = os.platform();
console.log(`I am running on the ${platform} platform.`);

const dirName = path.resolve(__dirname)
console.log(`This repo is located at: ${dirName}`);