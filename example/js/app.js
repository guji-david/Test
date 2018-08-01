/**
 * Created by david on 2015/9/16.
 */
$(document).ready(function(){
    $("#tabfirst li").each(function(index){
        var liNode=$(this);
        $(this).mouseover(function(){
            timeoutid=setTimeout(function(){
                $("div.content").removeClass("content");
                $("#tabfirst li.tabin").removeClass("tabin");
                $("div").eq(index).addClass("content");
                liNode.addClass("tabin");
            },300);
        }).mouseout(function(){
            clearTimeout(timeoutid);
        })
    })
    $("#realcontent").load("CSS01.html");
    $("#tabsecond li").each(function(index){
        $(this).click(function(){
            $("#tabsecond li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if(index==0){
                $("#realcontent").load("CSS01.html");
            }else if(index==1){
                $("#realcontent").load("CSS01.html");
            }else if(index==2){
                $("#realcontent").load("CSS01.html");
            }
        })
    })
});