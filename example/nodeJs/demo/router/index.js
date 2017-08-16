/**
 * Created by Administrator on 2017/8/13.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);