const os = require('os');

cpuCount = os.cpus().length;
const cpuData = os.cpus()
var count = 0;
console.log(`Number of cpucore is: ${cpuCount}`);
cpuData.forEach( element => {
    count++;
    console.log(`CPU core ${count}: ${JSON.stringify(element)}`);
})

//memory details
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`The total memory is: ${totalMemory/1024/1024} mb and the free memory is: ${freeMemory/1024/1024} mb`);