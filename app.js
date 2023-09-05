const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeRange = document.getElementById('size')
const colorInput = document.getElementById('color')
const clearBtn = document.getElementById('clear')

let size = 8
let color = 'black'
let isPressed= false
let x 
let y


function  drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

//  drawLine(500, 300, 300, 500)

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY

    //  console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined

    // console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

//    console.log(x2,y2) 

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
}   
})

increaseBtn.addEventListener('click', () => {
    size += 4

    if (size > 64) {
        size = 64
    }
   
    updateSizeRange()
})

function updateSizeRange() {
    sizeRange.innerText = size
}

decreaseBtn.addEventListener('click', () => {
    size -= 4

    if (size < 4) {
        size = 4
    }
   
    updateSizeRange()
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

colorInput.addEventListener('change', (e) => {
    color = e.target.value
})