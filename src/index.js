import renderAboutPage from './about'
import renderMenuPage from './menu'
import renderContactsPage from './contacts'

renderAboutPage()

let tabs = document.querySelectorAll('.tabs__link')
tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        renderTab(event)
    })
})

const renderTab = event => {
    let content = document.querySelector('#content')
    while (content.hasChildNodes()) {
        console.log('Remove last child')
        content.removeChild(content.lastChild)
    }


    switch (event.target.innerHTML) {
        case 'Who we are?':
            renderAboutPage()
            break
        case 'Menu':
            renderMenuPage()
            break
        case 'Contacts':
            renderContactsPage()
            break
    }
}