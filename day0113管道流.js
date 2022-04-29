let fs = require("fs")

// 创建一个读取流
let rs = fs.createReadStream("./input.txt")
// 创建一个写入流
let ws = fs.createWriteStream("./output.txt")

// 管道流
rs.pipe(ws)