function setup() {
  
	createCanvas(windowWidth, windowHeight);
	
	
	
	// put setup code here
}function draw() {
  
	background(10);
	translate(width/2, height/2);
	
	
	rotate( millis () /1000 );
	// temps
	fill(255, 255, 0);
	rectMode(CENTER);
	rect(0, 0, 100, 100);
	// mettre le point zero au millieur de l'ecrant
	
	translate(300, 0);
	rotate(millis() / 4000);
	fill(0, 128, 255, 50);
	rect(0,0, 100, 100);
	
	translate(200, 0);
	rotate( millis() / 4000);
	fill(128);
	rect(0, 0, 50, 50);
	
	
	
	
	
	
	
	
	
	//rectterr
	
	// puch(); 
	// enregister le repere point zero zero
	
	// pop();
	// cheakpoint
	// a la fin de la case
	
	
	
	
	// put drawing code here
}