class Paper{
constructor(x,y,r){
    var options = {
        restitution:1.0,
        friction:0.3,
        density:1.2
    }
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x, this.y, this.r, options)
    this.image = loadImage("paper.png")
    World.add(world, this.body)
 
}
display(){
    var pos = this.body.position
    imageMode(CENTER)
    image(this.image, pos.x, pos.y, 100, 100)
}
}