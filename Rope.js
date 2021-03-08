class rope{
    constructor(a,b){
       var options={
           bodyA : a,
           pointB : b,
           stiffness : 0.2,
           length : 150,
       }
       this.rope = constraint.create(options);
       this.b = b;
       World.add(world,this.rope);
    }

     display(){
        var posa = this.rope.bodyA.position;
        var posb=this.b;
        strokeWeight(1);
        line(posa.x,posa.y,posb.x,posb.y);
        }
}