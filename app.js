// Event Listeners
const box1 = document.querySelector('.box-1')
box1.addEventListener('click', () => {
    alert("Alert Box 1")
})

const btn3 = document.querySelector('.btn-3')
const box3 = document.querySelector('.box-3')

const btn2 = document.querySelector('.btn-2')
const box2 = document.querySelector('.box-2')

btn2.addEventListener('click', () => {
    box2.classList.toggle('green')
})

btn3.addEventListener('click', () => {
    box3.classList.toggle('blue')
})