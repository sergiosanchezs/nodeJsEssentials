const path = require('path');
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);

// const util = require('util');
// util.log(' ^ The name of the current file');
// const v8 = require('v8');
// log(v8.getHeapCodeStatistics());

const { log } = require('util');
log(' ^ The name of the current file');

const { getHeapCodeStatistics } = require('v8');
log(getHeapCodeStatistics());