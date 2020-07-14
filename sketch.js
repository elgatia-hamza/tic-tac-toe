xcoordinates = [0, 100, 200];
ycoordinates = [0, 100, 200];
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  strokeWeight(3);

  // this is horizontal lines:
  line(0, 100, 300, 100);
  line(0, 200, 300, 200);

  // this is vertical lines:
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  drawX(2, 1);
  drawO();
}

function drawX(x, y, xScale = 90) {
  stroke(0, 0, 255);
  line(
    100 - xScale + xcoordinates[x - 1],
    100 - xScale + xcoordinates[x - 1],
    xScale + xcoordinates[x - 1],
    xScale + xcoordinates[x - 1]
  );
  line(
    xScale + ycoordinates[y - 1],
    100 - xScale + ycoordinates[y - 1],
    100 - xScale + ycoordinates[y - 1],
    xScale + ycoordinates[y - 1]
  );
  stroke(0);
}

function drawO(x, y, oScale = 85) {
  stroke(255, 0, 0);
  ellipse(150, 150, oScale);
  stroke(0);
}
