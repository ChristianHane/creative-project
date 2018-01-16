function setup() {
	createCanvas(windowWidth, 700);
	// t = random(50, 100);
	// j = random(10, 50);
}

var circle = {
	width: 50,
	height: 50,
}
var colorSpeed = 1;

// speeds x
var pSpeed = 2;
var jSpeed = 4;
var eSpeed = 3;
var cSpeed = 2;

// speeds y
var qSpeed = 2;
var tSpeed = 4;
var wSpeed = 2;
var ySpeed = 3;

// x cords
var p = 400;
var j = 300;
var e = 250;
var c = 350

// y cords
var q = 200;
var t = 100;
var w = 75;
var y = 25;

// colors
var r = 41;
var g = 198;
var b = 153;


function draw() {
	
	// var col3 = 200;
	// var col2 = map(ball, 0, 500, 0, 255);
	// var col = map(ball.pos, 0, 500, 0, 255);	
	background(r, g, b);	
	noStroke();

	// fill(color("blue"));
	// ellipse(p, q, 120, 120);

	fill(150, 105, 50, 150);
	ellipse(p, t, 180, 180);

	// fill(70, 60, 120, 100);
	// ellipse(p, w, 200, 200);

	fill(200, 60, 200, 150);
	ellipse(p, y, 70, 70);

	fill(160, 85, 120, 150);
	ellipse(j, q, 210, 210);

	// fill(160, 85, 120, 100);
	// ellipse(j, t, 300, 300);

	fill(160, 85, 120, 150);
	ellipse(j, w, 270, 270);

	// fill(160, 85, 120, 100);
	// ellipse(j, y, 300, 300);

	// fill(160, 85, 120, 100);
	// ellipse(e, q, 300, 300);

	fill(160, 85, 120, 150);
	ellipse(e, t, 150, 150);

	// fill(160, 85, 120, 100);
	// ellipse(e, w, 300, 300);

	fill(160, 85, 120, 150);
	ellipse(e, y, 250, 250);

	// fill(160, 85, 120, 100);
	// ellipse(c, q, 300, 300);

	// fill(160, 85, 120, 100);
	// ellipse(c, t, 300, 300);

	fill(160, 85, 120, 150);
	ellipse(c, w, 200, 200);

	fill(160, 85, 120, 150);
	ellipse(c, y, 100, 100);

	// speed changes x
	j = j + jSpeed;
	p = p + pSpeed;
	e = e + eSpeed;
	c = c + cSpeed;
	
	// speed changes y
	t = t + tSpeed;
	q = q + qSpeed;
	w = w + wSpeed;
	y = y + ySpeed;



	r = r + colorSpeed;
	g = g - colorSpeed;
	b = b - (colorSpeed * .75);


	if(g < 0){
		g = g + 10;
	}
	if(g > 255){
		g = g - 10;
	}
	if(r < 0){
		r = r + 10;
	}
	if(r > 255){
		r = r - 10;
	}
	if(b < 0){
		b = b + 10;
	}
	if(b > 255){
		b = b - 10;
	}

	// bouncing x
	if(p > width){
		pSpeed = random(-2, -5);
		colorSpeed = -1;
	}
	if(p < -1){
		pSpeed = random(2, 5);
		colorSpeed = 1;
	}

	if(j > width){
		jSpeed = random(-2, -5);
		colorSpeed = -1;
	}
	if(j < -1){
		jSpeed = random(2, 5);
		colorSpeed = -1;
	}

	if(e > width){
		eSpeed = random(-2, -5);
		colorSpeed = -1;
	}
	if(e < -1){
		eSpeed = random(2, 5);
		colorSpeed = -1;
	}

	if(c > width){
		cSpeed = random(-2, -5);
		colorSpeed = -1;
	}
	if(c < -1){
		cSpeed = random(2, 5);
		colorSpeed = -1;
	}

	// bouncing y
	if(q > height){
		qSpeed = random(-2, -5);
		colorSpeed = -1;
	}
	if(q < -1){
		qSpeed = random(2, 5);
		colorSpeed = 1;
	}

	if(t > height){
		tSpeed = random(-2, -5);
		colorSpeed = 1;
	}
	if(t < -1){
		tSpeed = random(2, 5);
	}

	if(w > height){
		wSpeed = random(-2, -5);
		colorSpeed = 1;
	}
	if(w < -1){
		wSpeed = random(2, 5);
	}	
	
	if(y > height){
		ySpeed = random(-2, -5);
		colorSpeed = 1;
	}
	if(y < -1){
		ySpeed = random(2, 5);
	}
}


function mousePressed(){
	q = random(10, 600);
	t = random(10, 600);
	j = random(10, 600);
	p = random(10, 600);
}
	
