/**
 * Created by david on 2016/2/13.
 */
var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter();
life.setMaxListeners(11);
//addEventListener
function water(who){
    console.log('gei'+who+'daoshui11111');
}
life.on('qiuanwei',water);
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui2');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui3');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui4');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui5');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui6');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui7');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui8');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui9');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui10');
});
life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui11');
});
/*life.on('qiuanwei',function (who){
    console.log('gei'+who+'daoshui12');
});*/
life.on('qiuanwei1',function (who){
    console.log('gei'+who+'daoshui12');
});
life.on('qiuanwei1',function (who){
    console.log('gei'+who+'daoshui12');
});
life.on('qiuanwei2 ',function (who){
    console.log('gei'+who+'daoshui13');
});
life.removeListener('qiuanwei',water);
life.removeAllListeners('qiuanwei');
//console.log(life.listeners('qiuanwei').length);
console.log(EventEmitter.listenerCount(life,'qiuanwei'));
console.log(EventEmitter.listenerCount(life,'qiuanwei1'));
/*
var hasConfortListener=life.emit('qiuanwei','hanzi');
var hasLovedListener=life.emit('qiuanwei1','meizi');
var hasplayedListener=life.emit('qiuanwei3','hanzihemeizi');
       console.log(hasConfortListener);
        console.log(hasLovedListener);
        console.log(hasplayedListener);*/
//life.emit('qiuanwei','hanzi');


