class Chain {
 
    constructor(bodyA,pointB){

 var options={
bodyA:bodyA,
pointB:pointB,
length:15,
stiffness:0.07

 }

 this.pointB=pointB
 this.chain=Constraint.create(options);
World.add(world,this.chain)

    }

    fly(){
this.chain.bodyA=null

}

display(){

    if(this.chain.bodyA){

strokeWeight(5);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
   
}
    
    
}
}

