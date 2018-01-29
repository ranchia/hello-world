var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    if (req.url !== "/favicon.ico") {
        req.on('data', function(data){
            console.log("服务器接收到的数据：    "+decodeURIComponent(data));
        });
        req.on("end",function() {
            console.log("客户端请求数据全部接收完毕。");
        });
    }
    res.end();
}).listen(8888, "localhost", function() {
    console.log("listened");
});