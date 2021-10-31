const menuBtn = document.querySelector('.header .menu-icon')
const aside = document.querySelector('.main .aside')
const section = document.querySelector('.main .section')
const remove = document.querySelectorAll('.remove-icon')

const toggleAside = () => {
    aside.classList.toggle('hidden')
    verifyClass()

}

menuBtn.addEventListener('click', toggleAside)

window.addEventListener('resize', () => {
    if (window.innerWidth < 1035) {
        aside.classList.add('hidden')
    
    } else {
        aside.classList.remove('hidden')

    }

    verifyClass()

});

const verifyClass = () => {
    if (aside.classList.contains('hidden')) {
        section.classList.add('grow')
    } else {
        section.classList.remove('grow')
    }
}

remove.forEach(icon => {
    icon.addEventListener('click', () => icon.parentElement.remove())

})