/**
 * Created by david on 2016/2/12.
 */
function learn(something){
    console.log(something);
}
function we(callback,something){
    something+="is cool";
    callback(something);
}
we(learn,'Nodejs');
we(function(something){
    console.log(something);
},'jade');