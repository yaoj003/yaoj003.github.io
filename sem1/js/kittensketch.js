// declare variables
var imga;
var imgb;
var imgc;
var y = 210;
var interval = 100;
var laserSound;
var mainSong;
var playbutton, stopbutton;
var amplitude;

// preload images and sounds
function preload() {
	imga = loadImage("../img/cat02.png");
	imgb = loadImage("../img/cat01.png");
	imgc = loadImage("../img/cat03.png");

	laserSound = loadSound('../sound/laser.mp3');
	mainSong = loadSound('../sound/mainSong.mp3');
}

// setup canvas
function setup() {
	createCanvas(1250, 700);
	soundFormats('mp3');
	amplitude = new p5.Amplitude([0.5]);
	noStroke();

}

function draw() {
	// find pitch of music to get beat
	var level = amplitude.getLevel();

	background(0);
	noStroke();
	fill(255);
	rect(0, 350, 1250, 350);
	// stars
	fill(random(255),random(255),random(255));
	ellipse(50, 50, 20, 20);
	ellipse(50, 300, 20, 20);
	ellipse(150, 150, 20, 20);
	ellipse(250, 250, 20, 20);
	ellipse(400, 300, 20, 20);
	ellipse(450, 50, 20, 20);
	ellipse(550, 300, 20, 20);
	ellipse(600, 150, 20, 20);
	ellipse(750, 50, 20, 20);
	ellipse(850, 250, 20, 20);
	ellipse(1100, 150, 20, 20);
	ellipse(1000, 50, 20, 20);
	ellipse(1200, 300, 20, 20);

	// create cat that shoots lasers when background is clicked
	if (mouseIsPressed){
		image(imga, 310, 60, imga.width/1.2, imga.height/1.2);

		// laser lines
		fill(44, 225, 58);
		stroke(44, 225, 58);
		strokeWeight(4);
		line(610, 350, mouseX, mouseY);
		translate(-70,0);
		line(610, 350, mouseX, mouseY);

		fill(245, 255, 188);
		stroke(245, 255, 188);
		strokeWeight(2);
		line(610, 350, mouseX, mouseY);
		translate(70,0);
		line(610, 350, mouseX, mouseY);

 	}else {
		image(imgb, 335, 75, imgb.width/1.2, imgb.height/1.2);
		image(imgc, 445, y, imgc.width/1.2, imgc.height/1.2);

		fill(44, 225, 58);
		textSize(30);
		text("Click The Background!", 430, 600);
	}

	mainSong.setVolume(0.5);

// if song is playing cat head moves to the beat (moves less with smaller pitch change)
	if(mainSong.isPlaying() == true)
	{
		y = map(level,0,1,210,600);
}

	//play button
 	playbutton = createButton('Play');
	playbutton.position(25, 25);
 	playbutton.mousePressed(playmusic);
 // stop button
 	stopbutton = createButton('Stop');
 	stopbutton.position(75, 25);
 	stopbutton.mousePressed(stopmusic);
}

// controls buttons to start and stop song
// uses default setting where song starts from the same place it stopped
function playmusic() {
  if(mainSong.isPlaying() == false)
  {
    mainSong.play();
	}
}

function stopmusic()
{
  if(mainSong.isPlaying() == true)
  {
    mainSong.pause();
  }
}

// controls laser sound when clicked
function mousePressed() {
	laserSound.setVolume(0.3);
	laserSound.play();
}
