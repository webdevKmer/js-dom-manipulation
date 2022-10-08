const revealBtn = document.querySelector('.content-box button')
const content = document.querySelector('.content')

revealBtn.addEventListener('click', () => {
    content.classList.toggle('hidden')
    if (content.classList.contains('hidden')) {
        revealBtn.innerHTML = "Reveal"
    } else {
        revealBtn.innerHTML = "Hide"
    }
})

