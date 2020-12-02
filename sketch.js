var map, arrow, ball, line1, line2, line3, line4;

function preload() {
  mapimg = loadImage("map.png");
  arrowimg = loadImage("arrow.png");
}
function setup() {
  createCanvas(400, 400);
  map = createSprite(200, 150);
  arrow = createSprite(129, 321);
  ball = createSprite(105, 331, 5, 5);
  line1 = createSprite(106, 357, 45, 5);
  line2 = createSprite(106, 308, 45, 5);
  line3 = createSprite(84, 333, 5, 55);
  line4 = createSprite(202, 312, 45, 5);
  line5 = createSprite(174, 239, 5, 45);
  line6 = createSprite(128, 220, 90, 5);
  line7 = createSprite(84, 195, 5, 55);
  line8 = createSprite(225, 266, 5, 97);
  line9 = createSprite(250, 220, 45, 5);
  line10 = createSprite(270, 193, 5, 50);
  line11 = createSprite(246, 170, 45, 5);
  line12 = createSprite(225, 100, 5, 140);
  line13 = createSprite(200, 33, 50, 5);
  line14 = createSprite(175, 53, 5, 45);
  line15 = createSprite(130, 77, 95, 5);
  line16 = createSprite(82, 100, 5, 52);
  line17 = createSprite(104, 126, 50, 5);
  line18 = createSprite(128, 147, 5, 48);
  line19 = createSprite(106, 169, 45, 5);
  linecurve1 = createSprite(155, 334, 5, 70);
  linecurve2 = createSprite(153, 284, 5, 65);
  linecurve3 = createSprite(154, 98, 5, 33);
  pushStrength = 0;
  canFire = true;
  strokes = 0;
  arrow.addImage("arrow", arrowimg);
  arrow.scale = 0.05;
  map.addImage("map", mapimg);
  map.scale = 0.5;

  arrow.rotateToDirection = true;

  hole = createSprite(107, 107, 5, 5);
  hole.shapeColor = "green";

  linecurve1.rotation = 45;
  linecurve2.rotation = 45;
  linecurve3.rotation = 41;

  ball.shapeColor = "red";
}
function draw() {
  background("cyan");
  drawSprites();
  text("STROKES: " + strokes, 320, 30);
  createEdgeSprites();

  ball.collide(line1);
  ball.collide(line2);
  ball.collide(line3);
  ball.collide(line4);
  ball.collide(line5);
  ball.collide(line6);
  ball.collide(line7);
  ball.collide(line8);
  ball.collide(line9);
  ball.collide(line10);
  ball.collide(line11);
  ball.collide(line12);
  ball.collide(line13);
  ball.collide(line14);
  ball.collide(line15);
  ball.collide(line16);
  ball.collide(line17);
  ball.collide(line18);
  ball.collide(line19);
  ball.collide(linecurve1);
  ball.collide(linecurve2);
  ball.collide(linecurve3);

  line1.visible = false;
  line2.visible = false;
  line3.visible = false;
  line4.visible = false;
  line5.visible = false;
  line6.visible = false;
  line7.visible = false;
  line8.visible = false;
  line9.visible = false;
  line10.visible = false;
  line11.visible = false;
  line12.visible = false;
  line13.visible = false;
  line14.visible = false;
  line15.visible = false;
  line16.visible = false;
  line17.visible = false;
  line18.visible = false;
  line19.visible = false;
  linecurve1.visible = false;
  linecurve2.visible = false;
  linecurve3.visible = false;
  hole.visible = false;

  if (keyDown("LEFT_ARROW")) {
    arrow.rotation -= 5;
  } else if (keyDown("RIGHT_ARROW")) {
    arrow.rotation += 5;
  }

  arrow.x = ball.x;
  arrow.y = ball.y;
  ball.rotation = arrow.rotation;

  if (keyWentUp("UP_ARROW")) {
    ball.addSpeed(pushStrength, ball.rotation);
    canFire = false;
    strokes += 1;
  }
  if (ball.getSpeed() < 0.1) {
    canFire = true;
  }

  if (keyDown("UP_ARROW") && canFire === true) {
    pushStrength += 0.1;
  }
  ball.setSpeedAndDirection(ball.getSpeed() * 0.97);

  if (ball.x > 103 && ball.x < 109 && ball.y > 103 && ball.y < 109) {
    textSize(18);
    ball.velocityX = 0;
    ball.velocityY = 0;
    text("YOU SCORED!", 225, 74);
  }
}
