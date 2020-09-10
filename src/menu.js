let content = document.querySelector('#content')

const menuItems = [];

function MenuItem(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
}

menuItems.push(new MenuItem('Cappuccino', 'Good Old Cappuccino', 180))
menuItems.push(new MenuItem('Frappuccino', 'An Icy One', 200))
menuItems.push(new MenuItem('Peppuccino', 'Coffee for your Perrot', 80))
menuItems.push(new MenuItem('Russiano', 'Party Like A Russian!', 18000))

const renderMenuPage = () => {
    let menuGridContainer = document.createElement('div')
    menuGridContainer.classList.add('menu-content-grid-container')

    menuItems.forEach(menuItem => renderMenuItem(menuGridContainer, menuItem))
    content.appendChild(menuGridContainer)

    return content
}

const renderMenuItem = (menuGridContainer, menuItem) => {
    let menuContentItem = document.createElement('div')
    menuContentItem.classList.add('menu-content-item')

    let menuContentItemName = document.createElement('div')
    menuContentItemName.classList.add('menu-content-item-name')

    let h4 = document.createElement('h4')
    h4.textContent = menuItem.name
    menuContentItemName.appendChild(h4)
    let para = document.createElement('p')
    para.textContent = menuItem.description
    menuContentItemName.appendChild(para)
    menuContentItem.appendChild(menuContentItemName)

    let menuContentItemPrice = document.createElement('div')
    menuContentItemPrice.classList.add('menu-content-item-price')
    menuContentItemPrice.innerHTML = menuItem.price
    menuContentItem.appendChild(menuContentItemPrice)

    menuGridContainer.appendChild(menuContentItem)
}

export default renderMenuPage