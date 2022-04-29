// 使用fs模块

// 先引入模块 
let fs = require("fs")

// readdir("文件夹的路径",callback) 读取文件夹
fs.readdir("./css", (err, fileList) => {
    if (err) {
        console.log(err);
    } else {
        console.log(fileList); //[ 'index.css', 'style.css' ]
    }
})