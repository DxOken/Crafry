const section = document.querySelector('.about')


if (window.innerWidth <= 1170 && !section.firstElementChild.classList.contains('about__bg')) {
    const bg = document.createElement("div")
    bg.classList.add('about__bg')

    section.insertBefore(bg, section.firstChild)
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1170 && !section.firstElementChild.classList.contains('about__bg')) {
        const bg = document.createElement("div")
        bg.classList.add('about__bg')

        section.insertBefore(bg, section.firstChild)
    }

    if (window.innerWidth > 1170 && section.firstElementChild.classList.contains('about__bg')) {
        section.removeChild(section.firstChild)
    }
})