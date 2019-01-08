var arr="aaa";
function test(arr1) {
    arr1="bbb";
}
test(arr);
console.log(arr);

var m=1;
function log() {
    var m=22;
    console.log(m)
    return function () {
        m+=1;
    }
}
var _log=log();
_log();
console.log(m);
for(var i=0;i<5;i++){
    (function (i) {
        setTimeout(function(){
            console.log(i)
        },1000)
    })(i)
}

