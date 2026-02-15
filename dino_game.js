if (typeof window !== 'undefined') {
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const popup = document.getElementById("container1");
const bird = document.getElementById("Bird");
const NewCactus = document.getElementById("NewCactus");
let ScoreCount = document.getElementById("score");

function jump(){
    if (dino.classList != "jump") {
      if(dino.classList != "jump1"){
        dino.classList.add("jump");
        setTimeout(function () {
          dino.classList.remove("jump");
        }, 500);
      }
    }
}
function jump1(){
  if (dino.classList != "jump1") {
    dino.classList.remove("jump")
      dino.classList.add("jump1");
      setTimeout(function () {
        dino.classList.remove("jump1");
      }, 800);
    }
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let timerId = setTimeout(function tick() { // time for big Cactus
  const random = randomIntFromInterval(3000, 20000)
  NewCactus.animate(
    [
      { left: "calc(100% - 50px)" },
      { left: "0px" },
    ],
    {
      duration: 1000,
      iterations: 1,
    },
  ),
  timerId = setTimeout(tick, random);
}, 3000);

let timerId1 = setTimeout(function tick() { // time for small Cactus
  const random = randomIntFromInterval(1000, 4000)
  cactus.animate(
    [
      { left: "calc(100% - 50px)" },
      { left: "0px" },
    ],
    {
      duration: 1000,
      iterations: 1,
    },
  ),
  timerId = setTimeout(tick, random);
}, 3000);

let timerId2 = setTimeout(function tick() { // time for the bird
  const random = randomIntFromInterval(2000, 6000)
  bird.animate(
    [
      { left: "calc(100% - 50px)" },
      { left: "0px" },
    ],
    {
      duration: 2000,
      iterations: 1,
    },
  ),
  timerId = setTimeout(tick, random); 
}, 2000);




document.addEventListener("keydown", function (event){
    if(event.key == 'Shift'){
      jump1()
    }
    if(event.key == ' '){
      jump()
    }
})

  
const x = document.getElementById("myAudio");
const y = document.getElementById("myAudio1");

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

let isDead = false // to check if dino already died

  let isAlive = setInterval(function () {
    let dead = false
    let dinoY = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
  
    let cactusX = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
     
      if(dinoY >= 275  && cactusX < 50 && cactusX > 0){
        popup.classList.add("show");
        if(!isDead){
       x.pause(); 
       y.play()
        }
        isDead = true
      }
  },10)

  document.getElementById('confirm').onclick = myFunction;
      function myFunction(){
        window.location.reload();
      }

  let isAlive1 = setInterval(function () {

    let dinoYY = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  
    let cactusXX = parseInt(
      window.getComputedStyle(NewCactus).getPropertyValue("left")
    );
     
      if(dinoYY >= 240  && cactusXX < 50 && cactusXX > 0){
        popup.classList.add("show");
        if(!isDead ){
       x.pause(); 
       y.play()
        }
        isDead = true
      }
    
  },10)

  document.getElementById('confirm').onclick = myFunction;
      function myFunction(){
        window.location.reload();
      }

let isAlive2 = setInterval(function () {

let dinoY = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

let birdX = parseInt(
window.getComputedStyle(Bird).getPropertyValue("left")
);

if(dinoY <= 190 && birdX < 80 && birdX > 0){
  popup.classList.add("show");
        if(!isDead ){
       x.pause(); 
       y.play()
        }
        isDead  = true
}

},10)

document.getElementById('confirm').onclick = myFunction;
function myFunction(){
  window.location.reload();
}

let score = 0

let scoreCount1 = setInterval(function () {
  let text = document.createTextNode(`Score: ${score}`);
  score ++
  ScoreCount.textContent = `Score: ${score}`
},100)

}