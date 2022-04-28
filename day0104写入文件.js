// 使用fs模块

// 先引入模块
let fs = require('fs');

// 向文件中写入数据，原来的数据会被替换掉
// writeFile('文件路径', 数据, callback)
// 如果文件不存在，会自动创建一个文件，并且写入内容
fs.writeFile('aa.text', '这是aa文件', (err) => {
    err? console.log(err): console.log("写入成功");
})