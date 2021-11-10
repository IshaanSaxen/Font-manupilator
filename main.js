difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(VIDEO, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('Pink');
    document.getElementById("font_size").innerHTML = "Font size of the text will be" + difference + " px";
    textSize(difference);
    fill("blue");
    text('Ishaan', 50, 400);
}

function modeLoaded()
{
    console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}