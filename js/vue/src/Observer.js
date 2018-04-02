/**
 * Created by David on 2018/3/2.
 */
/**
 Observer是将输入的Plain Object进行处理,利用Object.defineProperty转化为getter与setter,从而在赋值与取值时进行拦截
 这是Vue响应式框架的基础
 */
function isObject(obj){
    return obj != null && typeof(obj) == 'object';
}
function isPlainObject(obj){
    return Object.prototype.toString(obj) == '[object Object]';
}

function observer(data){
    if(!isObject(data) || !isPlainObject(data)){
        return;
    }
    return new Observer(data);
}

var Observer = function(data){
    this.data = data;
    this.transform(data);
};

Observer.prototype.transform = function(data){
    for(var key in data){
        var value = data[key];
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:true,
            get:function(){
                console.log("intercept get:"+key);
                return value;
            },
            set:function(newVal){
                console.log("intercept set:"+key);
                if(newVal == value){
                    return;
                }
                data[key] = newVal;
            }
        });

        //递归处理
        this.transform(value);

    }
};
