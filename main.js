



window.addEventListener('DOMContentLoaded', () => {
    const favoritesCounter = document.querySelector('div.favorites-count')
    const productCards = document.querySelectorAll('article.trends-card')

    productCards.forEach((item) => {
        const addToFavoritesButton = item.querySelector('button.trends-card-favorite-btn')

        addToFavoritesButton.addEventListener('click', (e) => {
            favoritesCounter.textContent = Number(favoritesCounter.textContent) + 1 
            addToFavoritesButton.classList.add('added')
            addToFavoritesButton.setAttribute('disabled', true) 
        })
    })

    const logotype = document.querySelector('span.logotype')
    const button = document.querySelector('button.burger-btn')
            const menu = document.querySelector('div.menu')

            const handleVisibleMenu = () => {
                const isVisible = menu.className.includes('visible')
                if (!isVisible) {
                    const prevPositionTopOfBtn = button.getBoundingClientRect().y
                    const prevPositionRightOfBtn = button.getBoundingClientRect().x
                    const prevPositionTopOfLogo = logotype.getBoundingClientRect().y
                    const prevPositionRightOfLogo = logotype.getBoundingClientRect().x
                    menu.classList.add('visible')
                    button.classList.add('active')
                    button.style.left = `${prevPositionRightOfBtn}px`
                    button.style.y = `${prevPositionTopOfBtn}px`
                    logotype.style.left = `${prevPositionRightOfLogo}px`
                    logotype.style.x = `${prevPositionTopOfLogo}px`
                    logotype.style = `position: relative; z-index: 1000;`
                } else {
                    menu.classList.remove('visible')
                    button.classList.remove('active')
                    button.style.left = ``
                    button.style.y = ``
                    logotype.style = ``
                }
            }

            button.addEventListener('click', handleVisibleMenu)
}) 