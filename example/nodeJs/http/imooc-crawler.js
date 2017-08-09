/**
 * Created by david on 2016/2/13.
 */
var http=require('http');
var url='http://www.imooc.com/learn/348';
http.get(url,function(res){
  var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end',function(data){
    console.log(html);
    })
}).on('error',function(){
    console.log('获取课程数据错误 ')
});






