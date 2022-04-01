var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 250;
var gamestate;

var scoreBox1,
  scoreBox2,
  scoreBox3,
  scoreBox4,
  scoreBox5,
  scoreBox6,
  scoreBox7,
  scoreBox8,
  scoreBox9,
  scoreBox10;

var scoreText1,
  scoreText2,
  scoreText3,
  scoreText4,
  scoreText5,
  scoreText6,
  scoreText7,
  scoreText8,
  scoreText9,
  scoreText10;

var score = 0;

var Rando1 = 0;
var Rando2 = 0;
var Rando3 = 0;
var Rando4 = 0;
var Rando5 = 0;
var Rando6 = 0;
var Rando7 = 0;
var Rando8 = 0;
var Rando9 = 0;
var Rando10 = 0;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

 // scoreBox1=createSprite(100,100,100,100);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20);
  text("Score : " + score, 20, 30);

  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (keyCode === 8) {
    particles.push(
      new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10)
    );
    //score++;
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  textSize(30);
  text(scoreText1, 15, 520);
  text(scoreText2, 95, 520);
  text(scoreText3, 175, 520);
  text(scoreText4, 255, 520);
  text(scoreText5, 335, 520);
  text(scoreText6, 415, 520);
  text(scoreText7, 495, 520);
  text(scoreText8, 575, 520);
  text(scoreText9, 655, 520);
  text(scoreText10, 735, 520);

  // division 1
  if (frameCount == 20) {
    Rando1 = Math.round(random(1.5, 5.5));
  }

  if (Rando1 == 2) {
    scoreText1 = 100;
  }
  if (Rando1 == 3) {
    scoreText1 = 200;
  }
  if (Rando1 == 4) {
    scoreText1 = 300;
  }
  if (Rando1 == 5) {
    scoreText1 = 500;
  }
  // division 2
  if (frameCount == 40) {
    Rando2 = Math.round(random(1.5, 5.5));
  }

  if (Rando2 == 2) {
    scoreText2 = 200;
  }
  if (Rando2 == 3) {
    scoreText2 = 200;
  }
  if (Rando2 == 4) {
    scoreText2 = 300;
  }
  if (Rando2 == 5) {
    scoreText2 = 500;
  }
  //division 3
  if (frameCount == 60) {
    Rando3 = Math.round(random(1.5, 5.5));
  }

  if (Rando3 == 2) {
    scoreText3 = 200;
  }
  if (Rando3 == 3) {
    scoreText3 = 200;
  }
  if (Rando3 == 4) {
    scoreText3 = 300;
  }
  if (Rando3 == 5) {
    scoreText3 = 500;
  }
  // division 4
  if (frameCount == 80) {
    Rando4 = Math.round(random(1.5, 5.5));
  }

  if (Rando4 == 2) {
    scoreText4 = 200;
  }
  if (Rando4 == 3) {
    scoreText4 = 200;
  }
  if (Rando4 == 4) {
    scoreText4 = 300;
  }
  if (Rando4 == 5) {
    scoreText4 = 500;
  } // division 5
  if (frameCount == 100) {
    Rando5 = Math.round(random(1.5, 5.5));
  }

  if (Rando5 == 2) {
    scoreText5 = 200;
  }
  if (Rando5 == 3) {
    scoreText5 = 200;
  }
  if (Rando5 == 4) {
    scoreText5 = 300;
  }
  if (Rando5 == 5) {
    scoreText5 = 500;
  } // division 6
  if (frameCount == 120) {
    Rando6 = Math.round(random(1.5, 5.5));
  }

  if (Rando6 == 2) {
    scoreText6 = 200;
  }
  if (Rando6 == 3) {
    scoreText6 = 200;
  }
  if (Rando6 == 4) {
    scoreText6 = 300;
  }
  if (Rando6 == 5) {
    scoreText6 = 500;
  } // division 7
  if (frameCount == 140) {
    Rando7 = Math.round(random(1.5, 5.5));
  }

  if (Rando7 == 2) {
    scoreText7 = 200;
  }
  if (Rando7 == 3) {
    scoreText7 = 200;
  }
  if (Rando7 == 4) {
    scoreText7 = 300;
  }
  if (Rando7 == 5) {
    scoreText7 = 500;
  }
  // division 8
  if (frameCount == 160) {
    Rando8 = Math.round(random(1.5, 5.5));
  }

  if (Rando8 == 2) {
    scoreText8 = 200;
  }
  if (Rando8 == 3) {
    scoreText8 = 200;
  }
  if (Rando8 == 4) {
    scoreText8 = 300;
  }
  if (Rando8 == 5) {
    scoreText8 = 500;
  }
  // division 9
  if (frameCount == 180) {
    Rando9 = Math.round(random(1.5, 5.5));
  }

  if (Rando9 == 2) {
    scoreText9 = 200;
  }
  if (Rando9 == 3) {
    scoreText9 = 200;
  }
  if (Rando9 == 4) {
    scoreText9 = 300;
  }
  if (Rando9 == 5) {
    scoreText9 = 500;
  }
  //division 10
  if (frameCount == 200) {
    Rando10 = Math.round(random(1.5, 5.5));
  }

  if (Rando10 == 2) {
    scoreText10 = 200;
  }
  if (Rando10 == 3) {
    scoreText10 = 200;
  }
  if (Rando10 == 4) {
    scoreText10 = 300;
  }
  if (Rando10 == 5) {
    scoreText10 = 500;
  }
}
