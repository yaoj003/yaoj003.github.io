var x, y;
var imga;
var imgb;
var imgc;
var imgd;
var imge;

function preload() {
	imga = loadImage("pizza.png");
	imgb = loadImage("burger.png");
	imgc = loadImage("boy.png");
	imgd = loadImage("conveyor.png");
	imge = loadImage("speechbubble.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  x = windowWidth;
  y = windowHeight*2/3;
	z = windowWidth/2;
	frameRate(60);
}


function draw() {
	background(200);

// little fat boy
	//face
	image(imgc, windowWidth/2+95, windowWidth/13, imgc.width, imgc.height);

  // mouth
	fill(0);
	ellipse(width*3/4+30, height*3/4, 115, 115);

  // eyes
  fill(0);
  ellipse(width*3/4-30, height*3/4-80, 40, 40);
  ellipse(width*3/4+100, height*3/4-80, 40, 40);

  fill(255);
	if(x > width*3/4-100){
  	ellipse(width*3/4-30, height*3/4-70, 10, 10);
  	ellipse(width*3/4+100, height*3/4-70, 10, 10);
	} else{
  	ellipse(width*3/4-40, height*3/4-80, 10, 10);
  	ellipse(width*3/4+90, height*3/4-80, 10, 10);
	}

// conveyor belt
	image(imgd, 260, windowHeight/3+50, imgd.width/3, imgd.height/3);


// burger
	image(imgb, x, y, imgb.width/8, imgb.height/8);
	x = x + windowWidth/240;

	// return to start
  if (x > width*3/4){
      x = width/4;
  }

// pizza
	image(imga, z, y, imga.width/4, imga.height/4);
	z = z + windowWidth/240;

	if (z > width*3/4){
			z = width/4;
		}

//speech bubble
		if(mouseX>windowWidth*2/3){
			image(imge, windowWidth/2-50, windowHeight/5,imge.width/3, imge.height/3);
			}

// time and date
  fill(0);
	textSize(30);
	textAlign(CENTER);

	var dayText = day();
	var monthText = setDigits(month(),2);
	var yearText = setDigits(year(),2);

	  text(monthText+'/'+dayText+'/'+yearText, 370, windowHeight/3+90);

	var hourText = hour();
	var minuteText = setDigits(minute(), 2);
	var secondText = setDigits(second(), 2);

		text(hourText+':'+minuteText+':'+secondText, 370, windowHeight/3+130);



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
