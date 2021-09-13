class Chain{

constructor(bA,bB){
var options = {
length : 10 ,
stiffness : 0.7,
bodyA : bA,
bodyB : bB,


}
this.chain = Constraint.create (options) ;

World.add(world,this.chain);
}
display(){
var p1 = this.chain.bodyA.position ;

var p2 = this.chain.bodyB.position ;
push()
strokeWeight(3);
line (p1.x,p1.y,p2.x,p2.y);
pop()



}
}