/**
 * Created by david on 2016/2/13.
 */
var pet={
    words:'...',
    speak:function (say){
        console.log(say+' '+this.words);
    }
}
//pet.speak('speak');
var dog={
    words:'Wang'
}
pet.speak.call(dog,'speak')