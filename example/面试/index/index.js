/**
 * Created by david on 2015/10/26.
 */
var mydiv=document.getElementById("test");
mydiv.onclick=function(){
    getm(function(data){
        alert("这是"+data);
    })
};
function getm(fn){
    $.ajax({
        url:'data.php',
        success:function(data){
            console.log(data);
            fn(data);
        }

    })
}