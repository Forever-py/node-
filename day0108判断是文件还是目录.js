let fs = require('fs');

// fs.stat(): 返回文件（通过传入的文件名指定）的状态。
fs.stat('./css', (err, file) => {
    if (err) {
        console.log(err)
    } else {
        console.log(file.isDirectory());
        if (file.isDirectory()) {
            console.log("这是一个目录");
        } else if (file.isFile()) {
            console.log('这是一个文件')
        }
    }
})


fs.stat("./css/index.css", (err, file) => {
    if (err) {
        console.log(err);
    } else {
        console.log(file.isDirectory());
        if (file.isDirectory()) {
            console.log("是一个目录");
        } else if (file.isFile()) {
            console.log("是一个文件");
        }
    }
})


// http://www.haogu.com/admin/login
// http://www.haogu.com/admin/login/index.html
fs.stat("http://www.haogu.com/admin/login/index.html", (err, file) => {
    if (err) {
        console.log(err);
    } else {
        console.log(file.isDirectory());
        if (file.isDirectory()) {
            console.log("是一个目录");
        } else if (file.isFile()) {
            console.log("是一个文件");
        }
    }
})