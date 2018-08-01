/**
 * Created by David on 2017/8/17.
 */
/*--------------------------os 提供基本的系统操作函数。--------------------------*/
/*
var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");*/
/*--------------------------Path 提供了处理和转换文件路的工具。--------------------------*/
/*
var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));*/
/*--------------------------Net 用于底层的网络通信。提供了服务端和客户端的的操作。--------------------------*/
/*var net = require('net');
var server = net.createServer(function(connection) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(1000, function() {
    console.log('server is listening');
});
var net = require('net');
var client = net.connect({port: 1000}, function() {
    console.log('连接到服务器！');
});
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('断开与服务器的连接');
});*/
/*--------------------------DNS 用于解析域名--------------------------*/
/*
var dns = require('dns');
dns.lookup('www.github.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});*/
/*--------------------------Domain 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。--------------------------*/
var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

// 创建域
var domain1 = domain.create();

domain1.on('error', function(err){
    console.log("domain1 处理这个错误 ("+err.message+")");
});

// 显式绑定
domain1.add(emitter1);

emitter1.on('error',function(err){
    console.log("监听器处理此错误 ("+err.message+")");
});

emitter1.emit('error',new Error('通过监听器来处理'));

emitter1.removeAllListeners('error');

emitter1.emit('error',new Error('通过 domain1 处理'));

var domain2 = domain.create();

domain2.on('error', function(err){
    console.log("domain2 处理这个错误 ("+err.message+")");
});

// 隐式绑定
domain2.run(function(){
    var emitter2 = new EventEmitter();
    emitter2.emit('error',new Error('通过 domain2 处理'));
});


domain1.remove(emitter1);
emitter1.emit('error', new Error('转换为异常，系统将崩溃!'));