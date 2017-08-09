/**
 * Created by david on 2016/2/12.
 */
var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello nodeJs\n');
});
server.listen(1337,'127.0.0.1');
console.log('Server running at http:127.0.0.1:1337/');
