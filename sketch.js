//crea una variable para cada estado del juego

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

//crea una variable para la puntuación


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  //completa la función para precargar la imágen del obstaculo
  obstacle1 = ("obstacle1.png");
  obstacle2 = ("obstacle2.png");
  obstacle3 = ("obstacle3.png");
  obstacle4 = ("obstacle4.png");
  obstacle5 = ("obstacle5.png");
  obstacle6 = ("obstacle6.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //Cambia la animación del trex cuando colisione
  trex.("" , )
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //crear grupos de obstáculos y nubes
  obstaclesGroup = ;
  cloudsGroup = ;
  
  console.log("Hola" + 5);
  
  score = 0;
}

function draw() {
  background(180);

  //mostrar la puntuación
  text(" ", 500,50);
  
  
  
  if( === PLAY){
    //mover el suelo
    ground.velocityX = -4;
    //puntuación
    score = score + Math.round(frameCount/60);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //hacer que el Trex salte al presionar la barra espaciadora
    if(keyDown("space")&& trex.y >= 100) {
        trex.velocityY = -13;
    }
    
    //agregar gravedad
    trex.velocityY = trex.velocityY + 0.8
  
    //aparecer nubes
    spawnClouds();
  
    //aparecer obstáculos en el suelo
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
   else if (gameState === END) {
      ground.velocityX = 0;
     
      trex.changeAnimation("collided",trex_collided);

      //crea dos grupos de nubes y obstaculos
     obstaclesGroup.;
     cloudsGroup.;
   }
  
 
  //evitar que el Trex caiga
  trex.collide(invisibleGround);
  
  
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   //crea un sprite de obstaculo
  
   //Dale velocidad al obstaculo
   
    //generar obstáculos al azar
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:  (obstacle1);
              break;
      :  (obstacle2);
              break;
      case 3:  (obstacle3);
              break;
      : (obstacle4);
              break;
      case 5: (obstacle5);
              break;
      case 6: (obstacle6);
              break;
      default: break;
    }
   
    //asignar escala y ciclo de vida al obstáculo          
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //agregar cada obstáculo al grupo
    obstaclesGroup.add(obstacle);
 }
}

function spawnClouds() {
  //escribir aquí el código para aparecer las nubes
   if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //asignar ciclo de vida a la variable
    cloud.lifetime = 134;
    
    //ajustar la profundidad
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //agregar nube al grupo
   cloudsGroup();
    }
}

