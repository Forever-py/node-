let fs = require('fs');
let readFn = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    }) 
}

readFn("./a.txt").then(result => {
    console.log(result);
    return readFn("./b.txt")
}).then(result2 => {
    console.log(result2);
    return readFn("./c.txt")
}).then(result3 => {
    console.log(result3);
})