function setup() {
  // put setup code here
	createCanvas(windowWidth, windowHeight);
	// crée une page
	
	background(0);
	// c'est pour le fond (la couleur)

//rect(40, 120, 120, 40);
}

function draw() {

	background(0);
// repetra en boucle
	
	fill(255);
		rect(100,
			 100,
		 	width - 2 * 100,
		 	height - 2 * 100
		 					);
	// width = largeur totale du canvas height = hauteur 
	fill(50, 60, 60);
	textAlign(CENTER, CENTER);
	textSize(8000);
	text("Bonjour", width/2, height/2);
	
	//rect(40, 120, 120, 40);
	
}

function windowReseize() {
	createCanvas(windowWidth, windowHeight);
	
	
}

