/**
 * Created by David on 2017/8/7.
 */
/*requirejs.config({
    baseUrl:'./js',
    paths:{
        'jquery':[
            '//cdn.bootcss.com/jquery/2.2.3/jquery',
            './lib/jquery'
        ]
    }
})
require(['helper'],function(helper){
    var str=helper.trim('  amd   ');
    console.log("-------"+str+"---------");
})*/
requirejs.config({
    baseUrl:'./js',
    paths:{
        'jquery': './lib/jquery'
    }
})
require(['jquery','./app/api'],function($,api){
   $('#user').click(function () {
       // api.getUser().then(function (user) {
       //     console.log(user)
       // })
       api.getUserByJsonp();
   })
})