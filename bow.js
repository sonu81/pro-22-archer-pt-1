class Bow{
    constructor(x, y, width, height, angle){

        const options={
            isStatic:true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.collapse = false;

        this.image = loadImage("./assets/playerArcher.png");

        World.add(world, this.body);
        Matter.Body.setAngle(this.body, -90);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}

