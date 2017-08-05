/*
 1.获取文本框的内容 只要有内容 展示搜索框就会出现

 */
var oText=document.getElementById("text");
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
}
console.log([]==[])
console.log([]==![])
console.log([]==false)
console.log(![])
console.log([]==0)
console.log(''==0)
console.log([]=={})