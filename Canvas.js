var scl=20;
var s;
var food;
var ok1=false;
var ok2=false;

function setup()
{
createCanvas(800,800);
s=new Snake();
frameRate(12);
for(var i=0;i<=4;i++)
s.snek.unshift(createVector(19,19));

food=createVector(floor(random((width/scl))),floor(random(height/scl)));
}



function draw(){
background(51);
s.update();
s.show();

fill(255,0,50);
rect(food.x*scl,food.y*scl,scl,scl);


}

function keyPressed()
{
  if(keyCode===UP_ARROW)
    s.dir(0,-1);
  else if(keyCode===DOWN_ARROW)
    s.dir(0,1);
   else if(keyCode===LEFT_ARROW)
    s.dir(-1,0);
    else if(keyCode===RIGHT_ARROW)
    s.dir(1,0);

}


function end()
{
alert("You have lost");
window.location.reload(false); 

}




