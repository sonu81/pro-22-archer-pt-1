const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var baseImage, playerImage;
var playerBow;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  rectMode(CENTER);

  //create player base body
  var playerOptions={
    isStatic: true
  }
  playerBase = Bodies.rectangle(width/10, height/2, width/6, height/3.5, playerOptions);
World.add(world, playerBase);
  //create player body
  player = Bodies.rectangle(width/7.5, height/5.3, width/18, height/3, playerOptions);
  World.add(world, player);
  
  playerBow = new Bow(width/4.8, height/3.6, width/12, height/5);
  
  

}

function draw() {
  background(backgroundImg);
  
  //show the player image using image() function
  image(playerimage, player.position.x, player.position.y, width/18, height/3);

  //show the playerbase image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y, width/6, height/4);

 

  Engine.update(engine);
  playerBow.display();
  // Title
  fill("#a0d1b3");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
