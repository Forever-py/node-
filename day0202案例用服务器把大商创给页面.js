let http = require("http") //服务器模块
let fs = require("fs")

// 创建一个服务器对象app
let app = http.createServer((req, res) => {
	//设置写入头信息
	/* 
		第一个参数:成功的响应状态码
		第二个参数：文本模式和字符集
	 */
    // res.writeHead(200, {
    //     "content-type": "text/html;charset=utf-8"
    // })

    // http://localhost:3000/index.html
    console.log(req.url); // 返回请求的文件名index.html
	
	
    // 读取文件
    fs.readFile('./dscmall' + req.url, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data)  //服务器给前端响应的数据

        }
        res.end() //响应结束
    })

})


app.listen(3000, () => {
    console.log("3000running");
})