const circles = document.querySelectorAll('.element')

const n = 5;  // numero de circulos
const r = 100 // radio

let angulo = 0;
let originX = circles[0].offsetLeft
let originY = circles[0].offsetTop

setInterval(() => {
 angulo += 0.01
 circles.forEach((element,i) =>{
 element.style.left = `${originX + r*Math.cos(angulo + 2*Math.PI/n*i)}px`
 element.style.top = `${originY + r*Math.sin(angulo + 2*Math.PI/n*i)}px`})
},20)