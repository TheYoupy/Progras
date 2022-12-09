let degradey;


function setup() {
  // put setup code here
	createCanvas(windowWidth, windowHeight);
	
	degradey = createGraphics(width, height);
	
	for(let compteur = 0 ; compteur < height ; compteur++ ){
	let red =  map(compteur, 0, height, 0, 128);
	let green =  map(compteur, 0, height, 25, 75);
	let blue =  map(compteur, 0, height, 50, 50);
	stroke(red, green ,blue);
	line(0,compteur, width, compteur);
	
}

function draw() {
  // put drawing code here
	background(255);
	//255, 0, 0 
	

	}
	
	
	
}