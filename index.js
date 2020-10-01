var s1, s2, s3;
var button;

function setup(){
    createCanvas(400, 400);
    s1 = new shape({
        x: 125,
        y: 200
    });
    button = createButton('change shape');
    button.position(100, 300);
    button.mousePressed(updates1)
}


function draw(){
    background(0);
    s1.draw()
}

const updates1 = () => s1.toggleRot();


class lane{

}


class shape{
    constructor(pos){
        this.pos = pos
        this.rot = false
        this.count = 0;
        this.side = 50
    }

    setRot(rot){
        this.rot = rot
    }

    toggleRot(){
        this.rot = !this.rot
    }

    update(){
        this.pos.y -= 1
    }

    draw(){
        this.update()
        push();
        fill(255);
        translate(this.pos.x, this.pos.y)
        if(this.rot){
            this.count += 0.4
            rotate(Math.PI / 4)
        }else{
            rotate(0)
        }
        //translate(this.pos.x, this.pos.y)
        rect(-this.side / 2, -this.side / 2, this.side, this.side)
        pop();
    }
}