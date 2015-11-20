
var pizza;

function preload() {

pizza = loadAnimation("pizza.png");


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,255,255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(pizza,600,800);
}
