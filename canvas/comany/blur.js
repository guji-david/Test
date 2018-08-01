"use strict"
$(function () {
    var test=document.getElementById("test");
    var test2=document.getElementById("test2");
    // $("#blur-div").css("width",canvasWidth+"px");
    var player=document.getElementById("player");
    var testDiv=document.getElementById("testDiv");
    var intervalId;//循环变量
    var testNum=100;//测试弹出总次数
    var time=1000;//div出现的间隔时间
    var  outer_div= $("#outer-div");//获取外层div
    var  inner_div= $(".inner-div");//获取活动div
    var  count= $("#count");//分数div
    var canvasWidth=800;
    var canvasHeight=600;
    var countNum=0;//得分总数
    var size=50;//控制dev的大小
    var activeRegionObj={ x:-1, y :-1, s:size,num:0};
    var leftMargin= 0,topMargin=0;
    var testNum2=1;
    inner_div.click(function(){
        window.console.log(countNum);
        countNum+=10;
        count.text("您的score: "+countNum+" 分");
    });
    window.onload=function(e){

        count.text("您的score: "+0+" 分");
        $("#b5").click(function(){
            window.console.log(player);
            player.play();
        });
        $("#b6").click(function(){
            window.console.log(player);
            player.pause();
        });
        $("#b7").click(function(){
            window.console.log(player);
            player.stop();
        });
        let musicAudio = new Audio();
        $("#testDiv").click(function(){

            testNum2++;
            window.console.log(testNum2);
            if(testNum2%2){
                window.console.log(1111);
                musicAudio = new Audio("test3.mp3");
                musicAudio.play();
            }else{
                window.console.log(2222);
                musicAudio = new Audio("test2.mp3");
                musicAudio.play();
            }

        });
        init();
        countTime();
        // player.play();
    };

    function countTime() {
            //获取当前时间
            var date = new Date();

            //时间差
            var leftTime = date.getTime();
            //定义变量 d,h,m,s保存倒计时的时间
            var d,h,m,s;
            if (leftTime>=0) {
                m = Math.floor(leftTime/1000/60%60);
                s = Math.floor(leftTime/1000%60);
            }
            //将倒计时赋值到div中

            document.getElementById("_m").innerHTML = m+"分";
            document.getElementById("_s").innerHTML = s+"秒";
            //递归每秒调用countTime方法，显示动态时间效果
            setTimeout(countTime,1000);

        }

    //初始化
    function init(){
        intervalId = setInterval(function () {
            numInterval();
        },time);
    }

    //随机区域
    function setRegion(activeRegionObj){
        outer_div.append(inner_div);
        inner_div.css({
            "position": "absolute",
            "height": activeRegionObj.s,
            "width": activeRegionObj.s,
            'top':activeRegionObj.y,
            'left':activeRegionObj.x,
            "background": "#ff0",
            "cursor": "pointer"
        });

    }

    function countDown() { // 倒计时
        activeRegionObj={ x:Math.floor(Math.random()*(canvasWidth-2*size)),
            y:Math.floor(0.5*canvasHeight+Math.random()*(0.5*canvasHeight-2*size)),
            s:20+Math.floor(Math.random()*size),
            num:Math.floor(Math.random()*size)
            // fn:function(){
            //
            // }
        };
        setRegion(activeRegionObj);

    }

    function numInterval() {
        countDown();
        testNum--;

        // window.console.log(time);
        if(time==0){
            time=0;
        }else{
            time-=10;
        }
        if (testNum<=0) {
            clearInterval(intervalId);
            testNum=5;
        }
    }












})



