const words=[
"DevOps Engineer",
"AWS Cloud Engineer",
"Docker Expert",
"Linux Administrator",
"Kubernetes Learner"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

document.getElementById("typing").textContent=current.substring(0,j--);

}else{

document.getElementById("typing").textContent=current.substring(0,j++);

}

if(!isDeleting && j===current.length+1){

isDeleting=true;

setTimeout(type,1000);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){

i=0;

}

}

setTimeout(type,isDeleting?70:120);

}

type();

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("fade");

observer.observe(sec);

})