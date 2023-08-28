
var d = 0;
var rightWristX = 0;
var rightWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet Is Initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
      
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x; 
        rightWristY = results[0].pose.rightWrist.y;

        d = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("#969A97");
    document.getElementById("fonte").innerHTML = "Largura e altura serão = " + d + "px"; 
   textSize(d)
    fill("#F90093");
    stroke("#F90093");
    text("fonte",50, 400)
}
