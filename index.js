let sg = document.querySelector('#setgravity')
let sm = document.querySelector('#setmass')

let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let originX = canvas.width/2
let originY = canvas.width/2
let t = Math.PI/2
let ls = 200
let m = parseFloat(document.querySelector('#mass').value) //in g
let g = parseFloat(document.querySelector('#gravity').value) // m/ss
sg.onclick = () => {g = parseFloat(document.querySelector('#gravity').value)}
sm.onclick = () => {m = parseFloat(document.querySelector('#mass').value)}
let x,y
let f = 10
let av = 0.0
let aa = 0.0
let d = false
let interval
interval = setInterval(()=>{
  x = originX + (ls*Math.sin(t))
  y = originY + (ls*Math.cos(t))
  //first rubbing everything
  ctx.beginPath()
  ctx.rect(0,0,canvas.width, canvas.height)
  ctx.fillStyle = 'white'
  ctx.fill()
  //line
  ctx.beginPath()
  ctx.moveTo(originX,originY)
  ctx.lineTo(x,y)
  ctx.stroke()
  //bob
  ctx.beginPath()
  ctx.arc(x, y, 10, 0, 2*Math.PI)
  ctx.fillStyle = 'green'
  ctx.fill()
  //updating theta
  t -= av
  aa = m*g*0.0002*Math.sin(t)
  av += aa
  av *= 0.99
}, 20)
