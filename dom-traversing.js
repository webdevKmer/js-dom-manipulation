// Create Element
const movieelt = document.createElement('div')
movieelt.innerText = "Buzz l'eclair"

// Select Element
const movieselt = document.querySelector('.movies')

// Style Element
movieelt.setAttribute('class', 'movie')

// Insert Element In the DOM
movieselt.appendChild(movieelt)

// Traversing using Elements
// console.log(movieselt.parentElement.parentElement);
// console.log(movieselt.children);
// console.log(movieselt.firstElementChild.textContent);
// console.log(movieselt.lastElementChild.textContent);
// console.log(movieselt.nextElementSibling);
// console.log(movieselt.previousElementSibling);

// Traversing using Nodes
// console.log(movieselt.parentNode.parentNode);
// console.log(movieselt.childNodes);
// console.log(movieselt.firstChild)
// console.log(movieselt.lastChild)
// console.log(movieselt.nextSibling)
// console.log(movieselt.previousSibling)