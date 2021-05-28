const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImage, bgImage2, bglvl1;
var form;
var player, playerImg, player1, v1i, villain1, themeSong;
var playerCount = 0;
var gameState = 0;
var wall1, wall2;


function preload() {
	themeSong = loadSound("HPTS.mp3");
	bgImage = loadImage("Sprites/bg.png");
	bgImage2 = loadImage("Sprites/Molly lady.jpg")
	bglvl1 = loadImage("Sprites/bg lvl1.jpg")
	bglvl2 = loadImage("Sprites/bg lvl2.jpg")
	playerImg = loadImage("Sprites/Harry.png");
	playerBroom = loadImage("Sprites/Harrybroom.png")
	v1i = loadImage("Sprites/Villain1.png")
	v2i = loadImage("Sprites/Villain2.png")
	v3i = loadImage("Sprites/Villain3.png")
	v4i = loadImage("Sprites/Villain4.png")
	v5i = loadImage("Sprites/Villain5.png")
	doorImage = loadImage("Sprites/Door.png")
	flower1 = loadImage("Sprites/Bushy flower.png")
	flower2 = loadImage("Sprites/pinkviolet.png")
	Bush = loadAnimation("Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/Redbush.png", "Sprites/Redbush.png", "Sprites/Redbush.png", "Sprites/Redbush.png")
	Bush2 = loadAnimation("Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/yellowbush.png", "Sprites/yellowbush.png", "Sprites/yellowbush.png", "Sprites/yellowbush.png")
	Bush3 = loadAnimation("Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/plainBush.png", "Sprites/Pinkbush.png", "Sprites/Pinkbush.png", "Sprites/Pinkbush.png", "Sprites/Pinkbush.png")
	qImg=loadImage("Sprites/Quaffle.png")
	//flower3=loadImage("Sprites/rose1.png")
	//flower4=loadImage("Sprites/rose2.png")
	//flower5=loadImage("Sprites/yellow flower.png")
}

function setup() {
	createCanvas(displayWidth - 10, displayHeight - 127);

	engine = Engine.create();
	world = engine.world;

	form = new Form();
	player = new Player();

	growingbushes2 = createSprite(100, 160, 20, 20)
	growingbushes2.addAnimation("growing", Bush2);
	growingbushes2.scale = 0.5

	growingbushes = createSprite(1250, 160, 20, 20)
	growingbushes.addAnimation("growing", Bush);
	growingbushes.scale = 0.5

	growingbushes3 = createSprite(100, 690, 20, 20)
	growingbushes3.addAnimation("growing", Bush3);
	growingbushes3.scale = 0.5


	letter1 = new Letters(330, 520, 80, 60)
	letter2 = new Letters(80, 230, 80, 60)
	letter3 = new Letters(200, 230, 80, 60)
	letter4 = new Letters(80, 120, 80, 60)
	letter5 = new Letters(1280, 120, 80, 60)
	letter6 = new Letters(920, 380, 80, 60)
	letter7 = new Letters(1050, 380, 80, 60)
	letter8 = new Letters(1340, 620, 80, 60)
	letter9 = new Letters(1080, 600, 80, 60)
	letter10 = new Letters(1280, 240, 80, 60)

	wall1 = new Maze(770, 40, displayWidth, 20)
	wall2 = new Maze(10, 420, 20, displayHeight - 120)
	wall3 = new Maze(1510, 420, 20, displayHeight - 120)
	wall4 = new Maze(770, 728, displayWidth, 20)
	wall6 = new Maze(1200, 573, 20, displayHeight - 560)
	wall7 = new Maze(140, 580, displayWidth - 1300, 20)
	wall8 = new Maze(138, 290, 20, displayHeight - 650)
	wall9 = new Maze(250, 518, 20, displayHeight - 720)
	wall10 = new Maze(320, 458, displayWidth - 1400, 20)
	wall11 = new Maze(390, 518, 20, displayHeight - 720)
	wall12 = new Maze(680, 580, displayWidth - 970, 20)
	wall13 = new Maze(960, 578, 20, displayHeight - 790)
	wall14 = new Maze(980, 430, displayWidth - 1090, 20)
	wall15 = new Maze(980, 368, 20, displayHeight - 760)
	wall16 = new Maze(673, 310, displayWidth - 900, 20)
	wall17 = new Maze(285, 188, displayWidth - 1000, 20)
	wall18 = new Maze(1033, 188, displayWidth - 900, 20)
	wall19 = new Maze(1342, 300, 20, displayHeight - 360)

	Engine.run(engine);
	
	player1 = createSprite(90, 650, 20, 20);
	player1.addImage(playerImg);
	player1.scale = 0.1
	

		villain1 = createSprite(190, 523, 20, 20);
		villain1.addImage(v1i);
		//villain1.velocityY=-2;
		villain1.scale = 0.06

		villain2 = createSprite(190, 120, 20, 20);
		villain2.addImage(v2i);
		villain2.scale = 0.06

		villain3 = createSprite(1270, 520, 20, 20);
		villain3.addImage(v3i);
		villain3.scale = 0.06

		villain4 = createSprite(470, 520, 20, 20);
		villain4.addImage(v4i);
		villain4.scale = 0.06

		villain5 = createSprite(1430, 520, 20, 20);
		villain5.addImage(v5i);
		villain5.scale = 0.08;

		door = createSprite(1450, 110, 20, 20)
		door.addImage(doorImage);
		door.scale = 0.2

		/* player2 = createSprite(90, 650, 20, 20);
		player2.addImage(playerBroom);
		player2.scale = 0.2 
		player2.visible=false */

	 	Quaffle1=createSprite(1300,580,20,20);
		Quaffle1.addImage(qImg);
		Quaffle1.scale=0.5
		Quaffle1.visible=false
 
}


function draw() {
	background("black");
	Engine.update(engine);
	
		
	
	/* if(gameState===0){
	themeSong.play();
	image(bgImage,110,90,displayWidth-10,displayHeight-10);
	form.display();
	background(bgImage);
	} 

	if (gameState===1){
	form.hide();
	image(bgImage2,110,80,800,600);

	fill("black")
	textSize(20)
	text("Hello player! Welcome",200,200);
	}

	if (keyDown("space")){
		gameState=2;
		themeSong.stop();
	}
	 */
	if (gameState === 0) {
		background(bglvl1);

		
	

 if (keyDown("UP_ARROW")) {
        player1.y=player1.y-3;
    }
      if (keyDown("DOWN_ARROW")) {
        player1.y=player1.y+3;
    }
      if (keyDown("LEFT_ARROW")) {
       player1.x=player1.x-3;
    }
      if (keyDown("RIGHT_ARROW")) {
        player1.x=player1.x+3;
    }


		letter1.display();
		letter2.display();
		letter3.display();
		letter4.display();
		letter5.display();
		letter6.display();
		letter7.display();
		letter8.display();
		letter9.display();
		letter10.display();

		wall8.display();
		wall1.display();
		wall2.display();
		wall3.display();
		wall4.display();
		wall6.display();
		wall10.display();
		wall9.display();
		wall11.display();
		wall7.display();
		wall12.display();
		wall13.display();
		wall14.display();
		wall15.display();
		wall16.display();
		wall17.display();
		wall18.display();
		wall19.display();

		
	
		if (keyDown("Space")) {
			gameState = 1;
			//destroy();
		}
	}

	
	if (gameState === 1) {
		player1.remove()
		villain1.remove()
		villain2.remove()
		villain3.remove()
		villain4.remove()
		villain5.remove()
		door.remove();
		growingbushes.remove();
		growingbushes2.remove();
		growingbushes3.remove();
		hide()	
		Quaffle1.visible=true
	}

	drawSprites();
}


function hide() {
	clear();

	background(bglvl2)
	
	/* wall1.hide();
	wall2.hide();
	wall3.hide();
	wall4.hide();
	wall6.hide();
	wall7.hide();
	wall8.hide();
	wall9.hide();
	wall10.hide();
	wall11.hide();
	wall12.hide();
	wall13.hide();
	wall14.hide();
	wall15.hide();
	wall16.hide();
	wall17.hide();
	wall18.hide();
	wall19.hide();
	
 */

}




