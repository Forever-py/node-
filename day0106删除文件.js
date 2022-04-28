// 使用fs模块

// 先引入模块
let fs = require('fs');

// unlink('文件路径', callback)
fs.unlink('aa.text',(err) => {
    err? console.log(err): console.log("删除成功");
})