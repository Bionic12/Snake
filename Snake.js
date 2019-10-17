function Snake(){


this.snek=[];   
this.x=19;
this.y=19;
this.xspeed=0;
this.yspeed=0;

this.show=function(){
fill(255);

for(var i=0;i<this.snek.length;i++)
{
    rect(this.snek[i].x*scl,this.snek[i].y*scl,scl,scl);
    
}

}


this.update=function(){
this.x+=this.xspeed;
this.y+=this.yspeed;

this.x=constrain(this.x,0,(width-scl)/scl);
this.y=constrain(this.y,0,(height-scl)/scl);


this.snek.unshift(createVector(this.x,this.y));
this.snek.pop();

for(var i=1;i<this.snek.length-1;i++)
if(this.x==this.snek[i].x && this.y==this.snek[i].y && ok1 && ok2)
       end();
       if(ok1)ok2=true;

if(this.x==food.x&&this.y==food.y)
 {
  this.snek.push(this.snek[0]);
  food=createVector(floor(random((width/scl))),floor(random(height/scl)));
}

}


this.dir=function(x,y){
    ok1=true;
if(x!=0 && x+this.xspeed!=0)
{ this.xspeed=x;this.yspeed=0;}

else if(y!=0 && y+this.yspeed!=0)
     {this.yspeed=y;this.xspeed=0;}

}


}
