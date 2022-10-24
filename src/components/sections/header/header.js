const open = document.querySelector('.header__content-btn-open'),
    close = document.querySelector('.header__content-btn-close'),
    pageContent = document.querySelector('.main__content'),
    menu = document.querySelector('.header__content-menu'),
    header = document.querySelector('.header'),
    headerContent = document.querySelector('.header__content')

if (window.location.hash === '' || window.location.hash === '#home') {
    menu.firstElementChild.classList.add('selected')
} else {
    menu.childNodes.forEach((item) => {
        if (item.firstChild.href === window.location.href) {
            item.classList.add('selected')
        }
    })
}

open.addEventListener('click', () => {
    open.hidden = !open.hidden
    close.hidden = !close.hidden

    pageContent.style.display = 'none'
    menu.classList.add('opened')

    headerContent.removeChild(menu)
    header.appendChild(menu)


})

close.addEventListener('click', () => {
    open.hidden = !open.hidden
    close.hidden = !close.hidden

    pageContent.style.display = 'block'
    menu.classList.remove('opened')

    header.removeChild(menu)
    headerContent.appendChild(menu)

})

menu.childNodes.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.childNodes.forEach((item) => {
            item.classList.remove('selected')
        })
        menuItem.classList.add('selected')
        window.location.replace(menuItem.firstChild.href)

        if (window.innerWidth <= 1170) {
            close.click()
        }
    })
})