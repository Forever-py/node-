let fs = require('fs');
let readFn = (fileName) => {
    return new Promise((resolve,reject) =>{
        fs.readFile(fileName, (err,data) => {
           err ? reject(err) : resolve(data);
        })
    })
}

async function asyncReadFn() {
    let aText = await readFn('a.txt');
    let bText = await readFn('b.txt');
    let cText = await readFn('c.txt');
    console.log(aText.toString());
    console.log(bText.toString());
    console.log(cText.toString());
}

asyncReadFn();