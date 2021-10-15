const canva = document.querySelector("canvas");
canva.width = window.innerWidth;
canva.height = window.innerHeight;
var c = canva.getContext("2d");
// var i =100;
// c.fillStyle = "red";
// c.fillRect(100,100,100,100);
// c.fillStyle = "blue";
// c.fillRect(400,100,100,100);
// c.fillStyle = "black";
// c.fillRect(250,300,100,100);

// c.beginPath();
// c.moveTo(150,150);
// c.lineTo(450,150);
// c.strokeStyle= "white";
// c.stroke();
// for(let i=0;i<50;i++){
// var x = Math.random()*window.innerWidth;
// var y = Math.random()*window.innerHeight;
// var col = Math.random();
//     c.beginPath();
// c.arc(x,y,100,0,Math.PI*2,false);
// c.strokeStyle="rgba(1,1,"+col+","+col+")";
// c.stroke();
// }
const colors = ["red","black","blue","yellow","green"];
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = 1+Math.random()*2;
    this.dy = 1+Math.random()*2;
    this.draw = function (col) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = colors[col];
        c.stroke();
        c.fillStyle = colors[col];
        c.fill();

    }
    this.update = function (col) {
        this.x += this.dx;
        this.y += this.dy;
        this.draw(col);
        if (this.x + 10 > innerWidth) {
            this.dx = 0-this.dx;
        }
        if (this.x - 10 < 0) {
            this.dx = 0-this.dx;
        }
        if (this.y + 10 > innerHeight) {
            this.dy = 0-this.dy;
        }
        if (this.y - 10 < 0) {
            this.dy = 0-this.dy;
        }
    }
}
var circleArray = [];
var colorArray = [];
for(var i =0;i<1000;i++){
    circleArray[i]= new Circle(10+Math.random()*500,10+Math.random()*500,10);
    colorArray[i]= Math.floor(Math.random()*5);
}
console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i = 0;i<1000;i++){
        circleArray[i].update(colorArray[i]);
    }

}
animate();
