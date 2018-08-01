
var canvasWidth=800;
var canvasHeight=800;
/*
var canvasWidth=window.innerWidth;
var canvasHeight=window.innerHeight;
*/

var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
canvas.width=canvasWidth;
canvas.height=canvasHeight;
var image=new Image();
var radius=50;
var clippingRegion={ x:-1, y :-1, r:radius};
var leftMargin= 0,topMargin=0;
image.src="image.jpg";
image.onload=function(e){
    $("#blur-div").css("width",canvasWidth+"px");
    $("#blur-div").css("height",canvasHeight+"px");

    $("#blur-image").css("width",image.width+"px");
    $("#blur-image").css("height",image.height+"px");
       leftMargin=(image.width-canvasWidth)/2;
        topMargin=(image.height-canvasHeight)/2;
    $("#blur-image").css("top",topMargin+"px");
    $("#blur-image").css("left",leftMargin+"px");
    initcanvas();
    initcanvas();
};
function initcanvas(){
    clippingRegion={ x:Math.random()*(canvas.width-radius),
                     y:Math.random()*(canvas.height-radius),
                     r:radius};
    draw(image,clippingRegion);
};
function setCliplingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    context.clip();
}
function draw(image,clippingRegion){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setCliplingRegion(clippingRegion);
    //context.drawImage(image,leftMargin,topMargin,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    context.drawImage(image,0,0,canvas.width,canvas.height);
    context.restore();
}
function show(){

    var theAnimation=setInterval(
        function(){
            console.log("theAnimation");
            clippingRegion.r+=20;
            if(clippingRegion.r>2*Math.max(canvas.width,canvas.height)){
                clearInterval(theAnimation);
            }
            draw(image,clippingRegion);
        },30
    )
}
function reset(){
    clippingRegion.r=0;
    var theAnimation2=setInterval(
        function(){
            console.log("theAnimation2");
            clippingRegion.r+=2;
            if(clippingRegion.r>radius){
                clearInterval(theAnimation2);
            }
            draw(image,clippingRegion);
        },30
    )
    initcanvas();
}