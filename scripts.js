const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
    element.addEventListener('click', function () {
        if (!nav.classList.contains('show')) {
            nav.classList.add('show')
        } else {
            nav.classList.remove('show')
        }        
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        if (!nav.classList.contains('show')) {
            nav.classList.add('show')
        } else {
            nav.classList.remove('show')
        } 
    })
}

/* update header of the page when scrolling */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})