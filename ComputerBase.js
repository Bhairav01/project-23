class ComputerBase {
    
    constructor() {

  var ops ={

  isStatic =true

  }

  this.whidth;
  this.hight;
  this.body = Bodies.rectangle (100,200,50,50,ops)
  this .image= lodeimage("./assets/base2.png")
  World.add(world,this.body)

 }
 display(){
     var pos = this.body.position;
     rectmode(CENTER)
     rect(0,0,this.whidth,this.hight);





 }



}