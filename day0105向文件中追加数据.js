// 使用fs模块

// 先引入模块
let fs = require('fs');

// appendFile('文件路径', 数据, callback)
// 如果文件不存在，会自动创建一个文件，并且写入内容,如果存在，这回在存在的文件里追加数据
fs.appendFile('aa1.text', '这是aa1文件', (err) => {
    err? console.log(err): console.log("追加成功");
})
fs.appendFile('aa.text', '这是追加内容', (err) => {
    err? console.log(err): console.log("追加成功");
})