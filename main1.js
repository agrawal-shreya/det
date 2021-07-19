od="";
img="";
status="";
objects=[];


function preload() {
img=loadImage('bed.jpeg');    
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();

    od= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detecting";
}
function draw() {
    image(img,0,0,640,420);
    
    if(status!=""){
       for(var i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence *100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
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
        objects = result;
    }
}