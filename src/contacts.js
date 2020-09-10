let content = document.querySelector('#content')

const renderContactsPage = () => {

    let contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')
    let h3 = document.createElement('h3')
    h3.innerHTML = 'Where and how you can find us?'
    contactContainer.appendChild(h3)

    let para = document.createElement('p')
    para.innerHTML = 'Our address: Sadovaya str., 252'
    contactContainer.appendChild(para)

    para = document.createElement('p')
    para.innerHTML = 'Our social media: https://twitter.com/AKaryasov'
    contactContainer.appendChild(para)

    content.appendChild(contactContainer)
    return content
}

export default renderContactsPage