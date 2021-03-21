class Rope{
    constructor(bodyA, bodyB , offsetX , offsetY){

     this.offsetX = offsetX;
     this.offsetY = offsetY ;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}, 
            //length: 10


        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   display(){
        strokeWeight(4);

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        var Anchor1X = pointA.x
        var Anchor1Y = pointB.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.x + this.offsetY


        line(Anchor1X, Anchor1Y, Anchor2X , Anchor2Y);
    }
}




