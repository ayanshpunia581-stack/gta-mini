const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

let player={
x:450,
y:300,
w:30,
h:30,
speed:5
};

let keys={};

document.addEventListener("keydown",e=>{
keys[e.key.toLowerCase()]=true;
});

document.addEventListener("keyup",e=>{
keys[e.key.toLowerCase()]=false;
});

function update(){

if(keys["w"]||keys["arrowup"]) player.y-=player.speed;
if(keys["s"]||keys["arrowdown"]) player.y+=player.speed;
if(keys["a"]||keys["arrowleft"]) player.x-=player.speed;
if(keys["d"]||keys["arrowright"]) player.x+=player.speed;

}

function draw(){

ctx.fillStyle="#4caf50";
ctx.fillRect(0,0,900,600);

ctx.fillStyle="gray";
ctx.fillRect(200,0,100,600);
ctx.fillRect(500,0,100,600);

ctx.strokeStyle="white";
ctx.setLineDash([20,20]);

ctx.beginPath();
ctx.moveTo(250,0);
ctx.lineTo(250,600);
ctx.moveTo(550,0);
ctx.lineTo(550,600);
ctx.stroke();

ctx.setLineDash([]);

ctx.fillStyle="red";
ctx.fillRect(player.x,player.y,player.w,player.h);

ctx.fillStyle="white";
ctx.font="20px Arial";
ctx.fillText("Mini GTA Demo",20,30);
ctx.fillText("Move: WASD or Arrow Keys",20,60);

}

function game(){

update();
draw();

requestAnimationFrame(game);

}

game();let deadLine = {
    x: 0,
    y: 250,
    w: 900,
    h: 10
};

let gameOver = false;
// Dead line
ctx.fillStyle = "black";
ctx.fillRect(deadLine.x, deadLine.y, deadLine.w, deadLine.h);if (
    player.x < deadLine.x + deadLine.w &&
    player.x + player.w > deadLine.x &&
    player.y < deadLine.y + deadLine.h &&
    player.y + player.h > deadLine.y
) {
    gameOver = true;
    alert("💀 Game Over!");
    location.reload();
}
