// 使用fs模块

// 先引入模块
let fs = require('fs');

// 文件的读取readFile("文件路径", callback)
// ./同级目录  ../上级目录  / 根目录
fs.readFile("./a.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());  //将读取出来的结果转换成字符串
    }
})
fs.readFile("./b.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());  //将读取出来的结果转换成字符串
    }
})
console.log(1111111111111);