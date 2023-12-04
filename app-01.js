let xPosition = 300;
let xChange = 5;
let yPosition = 200;
let yChange = 5;


function setup(){
let myCanvas = createCanvas(600,400);

background(55);

}
function draw(){
    let redColor = random(150,255);
    let blueColor = random(25,175);
    let greenColor = random(75,200);
    
    noStroke();
    fill(redColor,blueColor,greenColor);
    ellipse(xPosition,yPosition,50);

    xPosition = xPosition + xChange;

    if(xPosition > width|| xPosition<0 ){
        xChange = xChange*-1;
    }
    yPosition = yPosition + yChange;
    if(yPosition > 400 || yPosition<0){
        yChange = yChange * -1;
    }

    console.log(yPosition)
}