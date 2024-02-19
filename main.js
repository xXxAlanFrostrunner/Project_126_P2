song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(500,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
video.size(500,500);
}

function draw()
{
    image(video , 0, 0, 498, 498);
}