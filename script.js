/* ===========================
   PLANET DATA
=========================== */

const planets = {

earth:{
title:"🌍 Yer",
image:"images/earth.jpg",
text:"Yer — Quyosh tizimidagi hayot mavjud bo'lgan yagona sayyora."
},

mars:{
title:"🔴 Mars",
image:"images/mars.jpg",
text:"Mars qizil sayyora bo'lib, kelajakdagi kosmik missiyalar uchun muhim hisoblanadi."
},

jupiter:{
title:"🟠 Yupiter",
image:"images/jupiter.jpg",
text:"Yupiter Quyosh tizimidagi eng katta sayyora."
},

saturn:{
title:"🪐 Saturn",
image:"images/saturn.jpg",
text:"Saturn o'zining ulkan halqalari bilan mashhur."
},

neptune:{
title:"🔵 Neptun",
image:"images/neptune.jpg",
text:"Neptun Quyoshdan eng uzoq joylashgan yirik sayyoralardan biri."
},

moon:{
title:"🌑 Oy",
image:"images/moon.jpg",
text:"Oy Yerning yagona tabiiy yo'ldoshi."
},

sun:{
title:"☀️ Quyosh",
image:"images/sun.jpg",
text:"Quyosh Quyosh tizimining markazidagi yulduz."
}

};

/* ===========================
   POPUP
=========================== */

function openPlanet(name){

const p=planets[name];

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML=p.title;

document.getElementById("popupImage").src=p.image;

document.getElementById("popupText").innerHTML=p.text;

}

function closePlanet(){

document.getElementById("popup").style.display="none";

}/* ===========================
   METEOR ANIMATION
=========================== */

const meteorContainer = document.getElementById("meteors");

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.left=Math.random()*window.innerWidth+"px";

meteor.style.top=Math.random()*250+"px";

meteor.style.animationDuration=(2+Math.random()*2)+"s";

meteorContainer.appendChild(meteor);

setTimeout(()=>{
meteor.remove();
},4000);

}

setInterval(createMeteor,1200);

/* ===========================
   POPUP CLOSE
=========================== */

window.addEventListener("click",function(e){

const popup=document.getElementById("popup");

if(e.target===popup){

closePlanet();

}

});

/* ===========================
   ESC CLOSE
=========================== */

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closePlanet();

}

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ===========================
   START METEORS
=========================== */

for(let i=0;i<3;i++){

setTimeout(createMeteor,i*400);

}images/
├── earth.jpg
├── mars.jpg
├── jupiter.jpg
├── saturn.jpg
├── neptune.jpg
├── moon.jpg
└── sun.jpg