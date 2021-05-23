
var color="rgb(25, 157, 201)";
canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(280,250,50,0,2*Math.PI);
ctx.stroke();

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(400,250,50,0,2*Math.PI);
ctx.stroke();

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(520,250,50,0,2*Math.PI);
ctx.stroke();

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(340,300,50,0,2*Math.PI);
ctx.stroke();

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(460,300,50,0,2*Math.PI);
ctx.stroke();

