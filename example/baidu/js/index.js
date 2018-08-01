/*
 1.获取文本框的内容 只要有内容 展示搜索框就会出现

 */
var oText=document.getElementById("text");
var oUl=document.getElementById("ul");
var oSea=document.getElementsByClassName("search")[0];
// var oSea=document.querySelector(".search");
oText.onkeyup=function () {
   /* if(oText.value){//隐式转换
        oSea.style.display="block";
    }else{
        oSea.style.display="none";
    }*/
//        三元表达式
//     ? oSea.style.display="block": oSea.style.display="none";
    oSea.style.display =oText.value?"block":"none";
    var os=document.createElement("script");
    os.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oText.value+"&cb=test";
    document.body.appendChild(os);
}
function test(res){
    res.s.forEach(function(el){
        var oLi=document.createElement("li");
        oLi.innerHTML="<a>"+el+"</a>"
        oUl.appendChild(oLi);
        console.log(el);
    })
}
/*
console.log([]==[]) //false
console.log([]==![])//true

console.log("---------------------");//
console.log([])//【】
console.log(![])//false
console.log(!![])//true
console.log([]==false)//true
console.log(![]==0)//true
console.log([]==0);//true
console.log(''==0)//true
console.log([]=={})//false*/
