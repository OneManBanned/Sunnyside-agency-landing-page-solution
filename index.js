const hamburger = document.querySelector('.--header-hamburger')
const nav = document.querySelector('nav')


window.addEventListener('load', resize)
window.addEventListener('resize', resize)
hamburger.addEventListener('click', toggleNav)


function toggleNav() {
    nav.classList.toggle('inactive')
    if (nav.classList.contains('inactive')) {
        hamburger.style.opacity = '100'
    } else
        hamburger.style.opacity = '.5'
}


function resize() {
    let query = window.matchMedia('(min-width: 500px)')
    if (query.matches) {
        nav.classList.remove('inactive')
    } else {
        nav.classList.add('inactive')
        hamburger.style.opacity = '100'
    }
}