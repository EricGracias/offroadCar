var road,roadImage;
var car,carImage;

function preload(){
carImage = loadImage("suvS.jpg");
roadImage = loadImage("background-1_0.png");

camera.on;
}

function setup() {
canvas = createCanvas(1536,718);

road = createSprite(768,359);
road.addImage("road",roadImage);
road.scale=1.85;
car = createSprite(768,359,20,20);
car.addImage("car",carImage);
car.rotation=90;
car.scale=0.3;

}


function draw() {
  background("white");

  if(keyDown("up")){
    car.velocityY = -5;
  }
  else{
    car.velocityY=0;
  }

    if(keyDown("right")){
      car.velocityX=2;
    }
    
    if(keyWentUp("right")){
      car.velocityX=0;
    }

    if(keyDown("left")){
      car.velocityX=-2;
    }

    if(keyWentUp("left")){
      car.velocityX=0;
    }

    camera.y=car.y;

    if(car.y-road.y<-30) {
      road.y=car.y-100;
    }

  drawSprites();
 
}
