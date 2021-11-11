function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);


    canvas = createCanvas(550, 400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#FFA500');

    textSize(difference);
    fill('#FFC0CB');
    text('Anshpreet, 50, 400')
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}