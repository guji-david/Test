
/**
 * Created by david on 2016/2/13.
 */

var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello nodeJs\n');
    res.end();
});
server.listen(2015);
console.log("2015");

