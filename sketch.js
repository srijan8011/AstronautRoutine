var bg, background, astronaut;
var sleep, brush, gym, eat, drink, move;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png", "images/gym22.onbg");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  move = loadAnimation("images/move.png");
}

function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  background = createSprite(200, 200);
  background.addImage("back_ground", bg);


  
}

function draw() {
  background(220);
  drawSprites();
}