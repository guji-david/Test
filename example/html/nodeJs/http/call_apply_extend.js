/**
 * Created by david on 2016/2/13.
 */
function pet(words){
    this.words=words;
    this.speak=function(){
        console.log(this.words);
    }
}
function Dog(words){
   pet.call(this,words);
}
var dog=new Dog('wang');

dog.speak();