/**
 *  Created by david on 2016/2/12.
 */
var c=0;
function printIt(c){
  console.log(c);
}
function plus(callback){
  setTimeout(function(){
    c+=1;
    callback(c);
  },1000);
}
plus(printIt);