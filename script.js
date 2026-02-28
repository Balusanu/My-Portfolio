/* TYPING EFFECT */

const roles=[
"AI Engineer",
"Machine Learning Developer",
"GenAI & RAG Builder",
"Agentic AI Enthusiast"
];

let i=0,j=0,deleting=false;
const typing=document.getElementById("typing");

function type(){
const word=roles[i];

typing.textContent=word.substring(0,j);

if(!deleting){ j++; } else { j--; }

if(j===word.length){
deleting=true;
setTimeout(type,1200);
return;
}

if(j===0){
deleting=false;
i=(i+1)%roles.length;
}

setTimeout(type,deleting?40:80);
}

type();

/* CURSOR GLOW */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

/* PARTICLES */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];

for(let k=0;k<120;k++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5,
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