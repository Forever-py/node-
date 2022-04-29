let fs = require('fs');

// 创建js文件夹
// mkdir("文件夹路径",callback)
fs.mkdir("./js", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("创建成功");
    }
})
fs.mkdir("./images", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("创建成功");
    }
})

// 删除文件夹 rmdir("文件夹路径",callback)
fs.rmdir('./images', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("删除成功");
    }
})