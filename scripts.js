// Open/close menu
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
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    window.addEventListener('scroll', function() {
        if(window.scrollY >= navHeight) {
            header.classList.add('scroll')
        } else {
            header.classList.remove('scroll')
        }
    })
}

//Testimonials caroussel slider swiper.js
const swiper = new Swiper('.swiper-container', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});


/**
 *ScrollReveal
 *Show elements when page scrolling 
 */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .text, #home .image,
    #about .text, #about .image,
    #services header, #services .card,
    #testimonials hearde, #testimonials .testimonials,
    #contact .text, #contact .links
    footer .brand, footer .social
    `, { interval: 100}
)

//Button back to top
function backToTopWhenScroll() {
    const backToTopButton = document.querySelector('.back-to-top')
    window.addEventListener('scroll', function() {
        if(window.scrollY >= 560) {
            backToTopButton.classList.add('show')
        } else {
            backToTopButton.classList.remove('show')
        }
    })
}

//When scroll
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTopWhenScroll()
})