class Paper{
  constructor(x,y,diameter){
   var options= {
 'isStatic':false,
 'friction':0.5,
 'restitution':0.3,
 'density':1.2,
 'isStatic':false,
}
this.diameter=diameter;
this.body=Bodies.circle(x,y,diameter/2,options);
this.image=loadImage("sprites/paper.png");
World.add(world,this.body);
  }
  
   display(){
  ellipseMode(RADIUS)
  ellipse(this.body.position.x,this.body.position.y,this.diameter/2,this.diameter/2)
  imageMode(CENTER);
  image(this.image,0,0,this.width,this.height)

   }
}
