/* Typing Animation */

const roles=[
"Machine Learning Professional",
"Generative AI Builder",
"Agentic AI Developer",
"RAG System Engineer"
];

let i=0,j=0,del=false;
const typing=document.getElementById("typing");

function type(){
const word=roles[i];
typing.textContent=word.substring(0,j);

j+=del?-1:1;

if(j===word.length) del=true;
if(j===0){del=false;i=(i+1)%roles.length;}

setTimeout(type,del?40:80);
}
type();

/* Cursor Glow */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

/* Particles */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];

for(let k=0;k<90;k++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.4,
vy:(Math.random()-0.5)*0.4,
size:Math.random()*2
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.vx;
p.y+=p.vy;

ctx.fillStyle="#38bdf8";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();