/**
 * Created by david on 2016/4/18.
 */
var eventUnit={
    //增加句柄
    addHandler:function(element,type,handler){
        if(element.addEventListener!=null){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;
        }
    },
    //删除句柄
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }else{
            element['on'+type]=null;
        }
    },
    //获取事件
    getEvent:function(event){
        return event?event:window.event;
    },
    //获取类型
    getType:function(event){
        return event.type;
    },
    //获取事件的目标元素
    getElement:function(event){
        return event.target||event.srcElement;
    },
    //阻止默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    //阻止冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble;
        }
    }
}
