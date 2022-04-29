let fs = require("fs")

let data = "好好学习，天天向上，你们能拿高薪\n"

// 创建一个写入流
let ws = fs.createWriteStream("./input.txt")
for (var i = 0; i < 10; i++) {
    // write()方法中不能传入number类型的数据，可以传入字符串或者buffer，所以需要加一个空字符串，这样传入的类型就是字符串了
    ws.write(data)
}
ws.end()  //写入结束
ws.on("finish", () => {
    console.log("写入完成");
})


