//观察者模式

// 目标着类
class Subject{
    constructor(){
        this.observers=[];//观察者类
    }
//   添加
    add(observer){
        this.observers.push(observer);
    }
//    删除
    remove(observer){
        let idx=this.observers.findIndex(item=>item===observer);
        idx>-1&&this.observers.slice(idx,1);
    }
//    通知
    notify(){
        for(let observer of this.observers){
            observer.update()
        }
    }
}
//观察者类
class Observer {
    constructor(name){
        this.name=name;
    }
    update(){
        console.log(`目标者通知我更新了，我是${this.name}`);
    }
}
//实列化目标者

let subject =new Subject();
//实例化俩个观察者
let obs1=new Observer('前端开发者');
let obs2=new Observer('后端开发者');
//向目标者添加观察者
subject .add(obs1);
subject .add(obs2);
//目标者通知更新
subject.notify();


//发布-订阅模式
//事件中心
let pubSub= {
    list: {},
    subscribe: function (key, fn) {//订阅
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn)

    },
    publish:function (key,...arg) {
        for(let fn of this.list[key]){
            fn.call(this,...arg);
        }
    },
    unSubscribe:function (key,fn) {//取消订阅
        let fnList=this.list[key];
        if(!fnList) return false;
        if(!fn){
            //不传入指定取消的订阅方法，则清空所有key下的订阅
            fnList&&(fnList.length=0)
        }else{
            fnList.forEach((item,index)=>{
                if(item===fn){
                    fnList.splice(index,1)
                }
            })
        }

    }
};
//订阅
pubSub.subscribe('onwork',timer=>{
    console.log(`上班了，${timer}`);
});
pubSub.subscribe('offwork',timer=>{
    console.log(`下班了，${timer}`);
});
pubSub.subscribe('launch',timer=>{
    console.log(`吃饭了，${timer}`);
});
pubSub.subscribe('onwork',timer=>{
    console.log(`上班了，${timer}`);
});
pubSub.publish('offwork','18:00:00');
pubSub.publish('launch','12:00:00');
pubSub.unSubscribe('onwork');











