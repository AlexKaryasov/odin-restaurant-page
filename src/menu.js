let content = document.querySelector('#content')

const menuItems = [];

class MenuItem {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
    }
}

const renderMenuPage = () => {
    let menuGridContainer = document.createElement('div')
    menuGridContainer.classList.add('menu-content-grid-container')

    content.appendChild(menuGridContainer)
    return content
}

const renderMenuItem = menuItem => {

}

export default renderMenuPage