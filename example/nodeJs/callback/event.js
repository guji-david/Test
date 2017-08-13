/**
 * Created by david on 2016/2/13.
 */
function clickIt(e){
    window.alert('Button is clicked');
}
var button= document.getElementById('#button');
button.addEventListener('click',clickIt())