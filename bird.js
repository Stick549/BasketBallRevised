class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 70, options);
      World.add(world, this.body);
      
    }
    display(){
      imageMode(CENTER);
      //image(paper, this.body.position.x, this.body.position.y);
    }
  };
  