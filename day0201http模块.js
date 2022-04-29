let http = require('http'); // 服务器模块

// 创建一个服务器对象app
let app = http.createServer((request, response) => {
    // request 请求 response 响应
    response.write('ok'); // 服务器给前端响应的数据
    response.end(); // 响应结束
})

// 服务器监听端口
// 参数1: 端口号  参数2:回调函数
app.listen(3000, ()=> {
    console.log("3000running");
})