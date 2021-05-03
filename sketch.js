let img;
let popupMode = false;
let pos = 25;
let whoClicked;
function preload() {
  img = loadImage('assets/graphic.png');
}

function setup() {
	// if(windowWidth>800){
	// 	img.resize(windowWidth*0.8, 0);
	// 	createCanvas(windowWidth*0.94, img.height*1.1);
	// }
	// else{
		//img.resize(1000, 0);
	createCanvas(1200, img.height*1.1);
	//}
	//console.log(img.width);
}

function draw() {
	background(240);
	image(img, (1400/2)-(img.width/1.6), 0);
	fill('#F4851F');
	strokeWeight(1);
	stroke(0);
	textAlign(CENTER);
	textSize(15);
	ellipse(342,227,20,20);
	ellipse(276,343,20,20);
	ellipse(836,243,20,20);
	ellipse(493,757,20,20);
	ellipse(802,789,20,20)
	strokeWeight(1.5);
	stroke('#F4851F');
	if(!popupMode){
		//Grow Lights Hover
		let d = dist(mouseX, mouseY,342,227);
	  	if (d < 10) {
	  		line(342,227, 223,133);
	    	ellipse(342,227,25,25);
	    	rect(155,120,120,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Grow Lights ➤ ', 215,137);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	  	//Sensors Hover 
		d = dist(mouseX, mouseY,276,343);
	  	if (d < 10) {
	  		line(276,343, 155,334);
	    	ellipse(276,343,25,25);
	    	rect(65,320,90,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Sensors ➤ ', 112,338);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	  	//Data Dashboard Hover
		d = dist(mouseX, mouseY,836,243);
	  	if (d < 10) {
	    	line(836,243, 982,140);
	    	ellipse(836,243,25,25);
	    	rect(982,130,145,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Data Dashboard ➤ ',1055,147);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	    //Community Hover
		d = dist(mouseX, mouseY,493,757);
	  	if (d < 10) {
	    	line(493,757, 221,674);
	    	ellipse(493,757,25,25);
	    	rect(221,674,120,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Community ➤ ',283,692);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	  	//Business Hover
		d = dist(mouseX, mouseY,802,789);
	  	if (d < 10) {
	    	line(802,789, 892,664);
	    	ellipse(802,789,25,25);
	    	rect(892,654,120,25);
	    	fill(255);
	    	strokeWeight(0);
			text(' Business ➤ ',954,672);
			fill('#F4851F');
			strokeWeight(1.5);
	  	}
	}
  	textSize(20);
  	fill('#474562');
  	strokeWeight(0);
  	text('Click the orange dots to learn more, or read the full whitepaper below.',586,1081);
  	fill('#474562');
  	rect(519,1104,170,40);
  	fill('#6f6c91');
  	rect(515,1100,170,40);
  	fill(255);
  	text('Whitepaper',598,1126);
  	if (mouseX>515&&mouseX<(515+170)&&mouseY>1100&&mouseY<(1100+40)) {
  		stroke('#474562');
  		strokeWeight(8);
  		fill('#6f6c91');
	  	rect(515,1100,170,40);
	  	strokeWeight(0);
	  	fill(255);
	  	text('Whitepaper ➤',598,1126);
  	}
  	if(popupMode){
  		fill('rgba(10,10,10, 0.5)');
  		strokeWeight(0);
  		rect(0,0,1200,img.height*1.1);
  		if(pos<25){
  			pos=25;
  		}
  		else if(pos>(img.height*1.1)-600){
  			pos = (img.height*1.1)-600;
  		}
  		textAlign(LEFT);
  		if(whoClicked=="lights"){
  			fill(255);
  			rect(300,pos,600,470);
  			fill(0);
  			let s = "   New innovations in lighting technology have made LEDs (Light Emitting Diodes) customizable, affordable, and energy-efficient. LED grow lights can be customized to provide certain types of light that can provide different outcomes for crops. For instance, changing the color used by the grow light can create crops that are shorter or taller, have smaller or larger leaves, have different fruiting outcomes, and more.\n   Lighting technology can also be used for pest management using Ultraviolet (UV) lights to kill pests and pathogens. One of the major advantages of pest management with UV radiation is that while pathogens have quickly developed resistance to pesticides, they do not seem to develop resistance to UV, or at least not at the same quick rate. Another major advantage is that while pesticides leave undesirable residue on food, UV treatment does not.";
			text(s, 325,pos+35, 550, 470);
  		}
  		else if(whoClicked=="sensors"){
  			fill(255);
  			rect(300,pos,600,430);
  			fill(0);
  			let s = "    The Internet has become so prolific, and computer chips have become so inexpensive, it seems like everything nowadays is an internet-enabled device! What do you think of when you think about internet-enabled devices? Traditionally, you might first think of your computer and your phone, but with the rise of the ‘Internet of Things’ (IoT), it’s not just our personal devices that are connected to the internet, but also our ‘things,’ like our thermostats, our doorbells, our lightbulbs, and sometimes even our refrigerators. In the greenhouse, it pays to be connected. Having humidity, temperature, camera, and other advanced sensors can help you monitor your greenhouse in a more effective manner.\n   You'll need a 'data dashboard' to monitor the data your sensors output.";
  			text(s, 325,pos+35, 550, 430);
  		}
  		else if(whoClicked=="data"){
  			fill(255);
  			rect(300,pos,600,615);
  			fill(0);
  			let s = "   Once you set up sensors in your greenhouse, those sensors are going to start generating data. This data is valuable, and can help monitor your greenhouse in real time, and spot trends over time that you can then use to make your business better, but your data can only work for you if you know how to work with it. When data becomes too large for you to handle using traditional data analytics (like spreadsheets), we call that ‘Big Data.’ Big Data needs special analytics to be processed. One common big data analytic is ‘Artificial Intelligence.’ Artificial Intelligence, or AI, uses advanced computing to accomplish tasks that might be too time-consuming or arduous for a human to do. When handling your data, especially if you’re using artificial intelligence, you’ll need a lot of computing power. If you need big, powerful computers but don’t want to manage them onsite, you can use ‘Cloud Computing.’ In Cloud Computing centers, engineers manage tons of computers that you can pay to connect to and use, so that you don’t have to manage the maintenance of those computers yourself. The information and algorithms you store with Cloud Computing platforms, like Amazon Web Services (AWS) or Microsoft Azure, is often said to be in ‘The Cloud.’";
  			text(s, 325,pos+35, 550, 600);
  		}
  		else if(whoClicked=="community"){
  			fill(255);
  			rect(300,pos,600,315);
  			fill(0);
  			let s = "   Where people live, work, and play affects their health. The environment where a person lives impacts their health. The physical environment influences a person’s daily choices. Policies and the environment can affect what we eat and how we move, which in turn affects our health. Communities that lack full-service grocery stores and neighborhood food markets have less access to fresh fruits and vegetables. Greenhouses and other Controlled Agriculture Environments can provide communities with affordable, local, and nutritious produce.";
  			text(s, 325,pos+35, 550, 300);
  		}
  		else if(whoClicked=="business"){
  			fill(255);
  			rect(300,pos,600,140);
  			fill(0);
  			let s = "A Controlled Environment Agriculture (CEA) or Greenhouse organization can be a profitable business, an impactful not-for-profit, or a B Corporation that balances both benefits!";
  			text(s, 325,pos+35, 550, 140);
  		}
  		fill(0);
  		ellipse(875,pos+20,25,25);
  		fill('red');
  		text('X',868.5,pos+27);
  		fill(0);
  	}

}
function mousePressed() {
	//Grow Lights Hit Point
	let d = dist(mouseX, mouseY,342,227);
  	if (d < 10) {
  		popupMode = true;
  		whoClicked = "lights";

  	}
  	//Sensors Hit Point
	d = dist(mouseX, mouseY,276,343);
  	if (d < 10) {
  		popupMode = true;
  		whoClicked = "sensors";
  	}
  	//Data Dashboard Hit Point
	d = dist(mouseX, mouseY,836,243);
  	if (d < 10) {
  		popupMode = true;
    	whoClicked = "data";
  	}
    //Community Hit Point
	d = dist(mouseX, mouseY,493,757);
  	if (d < 10) {
  		popupMode = true;
    	whoClicked = "community";
  	}
  	//Business Hit Point
	d = dist(mouseX, mouseY,802,789);
  	if (d < 10) {
  		popupMode = true;
    	whoClicked = "business";
  	}
  	if (mouseX>515&&mouseX<(515+170)&&mouseY>1100&&mouseY<(1100+40)) {
  		window.open("https://github.com/lilykdonaldson/greenhouse21/raw/main/whitepaper/Greenhouse21.pdf", '_blank');
  	}
  	if(popupMode){
  		d = dist(mouseX, mouseY,875,pos+20);
  		if (d<12.5){
  			popupMode = false;
  		}
  	}
  	
}

function mouseWheel(event) {
  pos += event.delta;
}