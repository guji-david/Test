/**
 * Created by david on 2016/4/18.
 */
window.onload=function(){
    var go=document.getElementById("go"),
        box=document.getElementById("box");
    eventUnit.addHandler(box,'click',function(){
        alert('我是父元素');
    });
    eventUnit.addHandler(go,'click',function(e){
        e=eventUnit.getEvent(e);
        alert(eventUnit.getElement(e).nodeName);
        eventUnit.preventDefault(e);
        eventUnit.stopPropagation(e);
    });

};