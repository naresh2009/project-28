class Mango {
constructor() {
var options = {
isStatic:true,
restitution:0,
firction:1

}
this.image=loadImage("sprites/mango.png");
this.image1=loadImage("sprites/mango.png");
this.image2=loadImage("sprites/mango.png");
this.image3=loadImage("sprites/mango.png");
this.image4=loadImage("sprites/mango.png");
this.image5=loadImage("sprites/mango.png");
this.image6=loadImage("sprites/mango.png");
this.image7=loadImage("sprites/mango.png");
this.image8=loadImage("sprites/mango.png");
this.image9=loadImage("sprites/mango.png");
this.image10=loadImage("sprites/mango.png");

}
display() {

image(this.image,600,480,40,40);
image(this.image1,500,500,40,40);
image(this.image2,600,400,40,40);
image(this.image3,700,500,40,40);
image(this.image4,650,400,40,40);
image(this.image5,650,700,40,40);
image(this.image6,700,450,40,40);
image(this.image7,550,450,40,40);
image(this.image8,650,450,40,40);
image(this.image9,750,490,40,40);
image(this.image10,550,500,40,40);

}

}