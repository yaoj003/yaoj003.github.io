var x, y;
var imga;
var imgb;
var imgc;
var imgd;
var imge;

function preload() {
	imga = loadImage("../img/pizza.png");
	imgb = loadImage("../img/burger.png");
	imgc = loadImage("../img/boy.png");
	imgd = loadImage("../img/conveyor.png");
	imge = loadImage("../img/speechbubble.png");
}

function setup() {
	createCanvas(1000, 600);
  x = 1000;
  y = 400;
	z = 500;
	frameRate(60);
}


function draw() {
	background(200);

// little fat boy
	//face
	image(imgc, 560, 65, imgc.width, imgc.height);

	// mouth
	fill(0);
	ellipse(810, 445, 115, 115);

  // eyes
  fill(0);
  ellipse(730, 350, 40, 40);
  ellipse(900, 350, 40, 40);

  fill(255);
	if(x > 650){
  	ellipse(724, 350, 10, 10);
  	ellipse(895, 350, 10, 10);
	} else{
  	ellipse(730, 357, 10, 10);
  	ellipse(900, 357, 10, 10);
	}

// conveyor belt
	image(imgd, 120, 250, imgd.width/3, imgd.height/3);


// burger
	image(imgb, x, y, imgb.width/8, imgb.height/8);
	x = x + 4;

	// return to start
  if (x > 750){
      x = 250;
  }

// pizza
	image(imga, z, y, imga.width/4, imga.height/4);
	z = z + 4;

	if (z > 750){
			z = 250;
		}

//speech bubble
		if(mouseX>650){
			image(imge, 450, 100,imge.width/3, imge.height/3);
			}

// time and date
  fill(0);
	textSize(30);
	textAlign(CENTER);

	var dayText = day();
	var monthText = setDigits(month(),2);
	var yearText = setDigits(year(),2);

	  text(monthText+'/'+dayText+'/'+yearText, 370, 150);

	var hourText = hour();
	var minuteText = setDigits(minute(), 2);
	var secondText = setDigits(second(), 2);

		text(hourText+':'+minuteText+':'+secondText, 370, 200);



}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setDigits(number, digits) {
	var str = number+'';

	while(str.length < digits) {
		str = '0'+str;
}

	return str
}
