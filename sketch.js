var canvas;
var music;
var rect1,rect2,rect3,rect4;
var block;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,500);

    //create 4 different surfaces
    rect1=createSprite(50,490,105,20);
    rect1.shapeColor = "green";

    rect2=createSprite(170,490,105,20);
    rect2.shapeColor = "red";

    rect3=createSprite(300,490,105,20);
    rect3.shapeColor = "orange";

    rect4=createSprite(425,490,105,20);
    rect4.shapeColor = "purple";

    block=createSprite(random(20,750),250,30,30);
    block.shapeColor="white";
    block.velocityX=4;
    block.velocityY=5;

    //create box sprite and give velocity

}

function draw() {
    background("grey");
    //create edgeSprite
    edges=createEdgeSprites();
    if(block.bounceOff(edges))
    {
        music.play();
    }

    //add condition to check if box touching surface and make it box
    if(block.isTouching(rect1)&&block.bounceOff(rect1))
    {
        block.shapeColor="green";
        music.play();
    }
    if(block.isTouching(rect2))
    {
        block.shapeColor="red"; 
        block.velocityX=0;
        block.velocityY=0;
        music.stop();
    }
    if(block.isTouching(rect3)&&block.bounceOff(rect3))
    {
        block.shapeColor="orange";
        music.play();
    }
    if(block.isTouching(rect4)&&block.bounceOff(rect4))
    {
    
        block.shapeColor="purple";
        music.play();
    }
    

    drawSprites();
}
