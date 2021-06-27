class Villain{
    constructor(){
      this.image = loadImage("VillainImg.png");
    }
    show(){
      imageMode(CENTER);
      image(this.image,random(100,1200),random(100,500),75,75);
    }
}