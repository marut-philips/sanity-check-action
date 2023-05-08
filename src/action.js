async function run(){
    console.log('Hello world');
    var isPyAvailable = require('hasbin').sync('python');
    console.log("Python installed : " + isPyAvailable);

    const checkDiskSpace = require('check-disk-space').default
    checkDiskSpace('C:/').then((diskSpace) => {
        console.log(diskSpace)
    })

    console.log("Current directory", __dirname);
}

run();