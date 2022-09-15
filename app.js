// Event Listeners
const btn2 = document.querySelector('.btn-2')
btn2.addEventListener('click', () => {
    alert("Alert Box 2")
})

const btn3 = document.querySelector('.btn-3')
const box3 = document.querySelector('.box-3')

btn3.addEventListener('click', () => {
    box3.style.backgroundColor = "blue"
})