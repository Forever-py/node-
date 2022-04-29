let fs = require("fs")

// 创建一个读取流
let rs = fs.createReadStream("./input.txt")
let str = "" //定义一个空字符来接受每次读到的数据
let num = 0
// console.log(rs);
rs.on("data", (strData) => {
    // strData每次读取的数据
    str += strData;
    num ++;
})

rs.on("end", () => {
    console.log(str);
    console.log(num);
})
