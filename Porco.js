class Porco extends BaseClass {
  constructor(x, y){
    super(x,y,60,60);
    this.image = loadImage("sprites/enemy.png");
  }
  display() {
    console.log(this.body.speed);
    if(this.body.speed < 3){
        super.display();
    } else {
        World.remove(world, this.body);
    }
  }
};