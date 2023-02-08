let canvas;

function setup() {
  canvas = createCanvas(1000, 1000);

  ctx = canvas.drawingContext;
}

function draw() {
  // 	let hw = width * 0.5;

  // 	let hh = height * 0.5;

  let h = hour();
  let min = minute();
  let s = second();

  let a = map(h, 0, 24, width * 0.25, width * 0.75);
  let b = map(min, 0, 60, height * 0.25, height * 0.75);

  let count = 12;

  let size = 50;

  let hs = size * 0.3333;

  let noiseScale = 0.1;

  let offset_ = (count * 0.5 - 0.5) * size;

  let center = createVector(500, 500);

  let offset = center.copy().sub(offset_, offset_);

  let m;

  if (h > 7 && h < 19) {
    background(234, 226, 211);
  } else {
    background(0);
  }

  textSize(20);

  m = createVector(mouseX, mouseY);
  m = createVector(a,b);


  console.log("s =" + s);

  for (let y = 0; y < count; y++) {
    let ny = y * noiseScale;

    for (let x = 0; x < count; x++) {
      let v = createVector(x, y)
        .mult(size) /* .add(n) */
        .add(offset);
      //x = map(x,0,60,0,windowWidth);

      let a = m.copy().sub(v);

      //h
      push();
      translate(width * 0.75 + 50, height * 0.25 - 20);
      rotate(-m.heading());
      text("h", 0, 0);
      pop();
      //min
      push();
      translate(width * 0.25 - 25, height * 0.75 + 75);
      rotate(-m.heading());
      text("min", 0, 0);
      pop();

      //sunflower-line
      push();

      translate(v.x, v.y);

      rotate(a.heading());

      //draw line in day and night

      if (h > 7 && h < 19) {
        stroke(246, 159, 19);

        strokeWeight(4);

        //noFill();
        //noStroke();

        // fill(65,136,93);
        // triangle(10, 55, 38, 0, 66, 55);

        fill(246, 194, 13);
        //ellipse(0,0, 35, 40);
        line(28, hs - 2, 0, -hs + 2);

        fill(0);
        noStroke();
        circle(15, 0, 10);

        pop();
        //noLoop();
      } else {
        stroke(64, 255, 127);

        strokeWeight(4);

        //noFill();

        //noStroke();

        // fill(65,136,93);

        // triangle(10, 55, 38, 0, 66, 55);

        fill(0);

        //ellipse(0,0, 35, 40);

        line(28, hs - 2, 0, -hs + 2);

        fill(0);

        noStroke();

        circle(15, 0, 10);

        pop();
      }
    }
  }
}



function keyPressed(){

  save("img.png");  

}
