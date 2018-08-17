let x = 300;
let dx = 3;
let y = 100;
let dy = 5;
let score = 0;
let y1 = 0;
let y2 = 0;
let platform_speed = 20;
let score1 = 0;
let score2 = 0;

function setup() {
  createCanvas(900, 500);
}

function draw() {
  background("#FF033E");
  fill("#00FC62");
  //шарик
  ellipse(x, y, 40, 40);

  //платформа левая
  fill("#AD09A2");
  rect(20, y1, 30, 150);

  if (y > y1 && y < y1 + 150 && x < 55 && x > 45) {
    dx = -dx;
  }

  //платформа правая
  fill("#AD09A2");
  rect(width - 50, y2, 30, 150);

  if (y > y2 && y < y2 + 150 && x < width - 45 && x > width - 55) {
    dx = -dx;
  }

  if (x > width + 50) {
    score1 = score1 + 1;
    x = width / 2;
    y = height / 2;
  }

  if (x < -50) {
    score2 = score2 + 1;
    x = width / 2;
    y = height / 2;
  }

  if (y < 0 || y > height) {
    dy = -dy;
  }

  textSize(100);
  text(score1, width / 4 - 30, 100);
  text(score2, (3 * width) / 4 - 30, 100);

  y = y + dy;
  x = x + dx;
}

function keyPressed() {
  if (keyCode == "87") {
    y1 = y1 - platform_speed;
  } else if (keyCode == "83") {
    y1 = y1 + platform_speed;
  }

  if (keyCode == UP_ARROW) {
    y2 = y2 - platform_speed;
  } else if (keyCode == DOWN_ARROW) {
    y2 = y2 + platform_speed;
  }
}
