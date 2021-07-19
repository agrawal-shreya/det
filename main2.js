img="";
status="";
object   =[];


function preload() {
img=loadImage('tv.jpg');    
}
function setup() {
    canvas = createCanvas(600,400);
    canvas.center();

    od= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detecting";
}
function draw() {
    image(img,0,0,600,400);
    
    if(status!=""){
        for(i=0;i<object.length;i++){
            
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#FF0000");
            percent = floor(object[i].confidence *100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }

    }
}
function home() {
    window.location="index.html";
}
function modelLoaded() {
    console.log("model is loaded");
    status=true;
    od.detect(img,gotResult);
}
function gotResult(error,result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        object = result;
    }
}