// 使用fs模块

// 先引入模块
let fs = require('fs');

// fs.rename("要修改的文件名路径",重命名之后的文件名路径,callback)
fs.rename('aa1.text','aa.txt',(err) => {
    err? console.log(err): console.log("重命名成功");
})