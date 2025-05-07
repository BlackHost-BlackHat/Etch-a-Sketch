const container=document.querySelector("#container")
let divs,r,b,g,o=1;

function createDivs(pixel){
 let containerWidth=960
 let boxWidth=containerWidth/pixel

    for(let i=0;i<pixel;i++){
        for(let j=0;j<pixel;j++){
   let div= document.createElement("div")
    div.classList.add("square")
    div.style.width=`${boxWidth}px`
    div.style.height=`${boxWidth}px`
    div.style.opacity = 1;
    container.appendChild(div)
    console.log(`Created div: ${i}.${j}`)
        }
    }
    divs = document.querySelectorAll(".square");
}

function randomColor(){
     r=Math.floor(Math.random()*255);
     b=Math.floor(Math.random()*255);
     g=Math.floor(Math.random()*255);
}


function hoverEffect() {
    divs.forEach(div => {
        div.addEventListener("mouseenter", function() {
            randomColor();
            div.style.opacity-=0.1;
            div.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    });
}

function setPixels(){
  const buton=document.querySelector("button")
  buton.addEventListener("click",function(){
    const pixels=prompt("Introdu numarul de pixeli (maxim 100x100):")
    container.innerHTML=""
    createDivs(pixels)
    hoverEffect()
  })
}

createDivs(16)   
hoverEffect()
setPixels()