var http = require('http')
var a = 1000
var b = 3000
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('HELLO WORLD')
    res.write("<br><b> A value is </b>" +a)
    res.write("<br><b> B value is </b>" +b)
    res.end("<br> BYE")
}).listen(3000)
console.log("SERVER STARTED ON http://127.0.0.1:3000")
