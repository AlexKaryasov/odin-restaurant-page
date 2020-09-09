const content = document.querySelector('#content')

const renderAboutPage = () => {
    renderContentNameLogo()
    renderAboutContentCorrespondentInfo()
    return content
}

const renderContentNameLogo = () => {
    let contentNameLogo = document.createElement('div')
    contentNameLogo.classList.add('about-content-name-logo')

    let contentName = document.createElement('div')
    contentName.classList.add('about-content-name')

    let h1 = document.createElement('h1')
    h1.textContent = 'Welcome to the Coffee Fake Samara'
    contentName.appendChild(h1)

    let para = document.createElement('p')
    para.textContent = "We're proud to be your host!"
    contentName.appendChild(para)

    contentNameLogo.appendChild(contentName)
    content.appendChild(contentNameLogo)
}

const renderAboutContentCorrespondentInfo = () => {
    let contentCorrespondentInfo = document.createElement('div')
    contentCorrespondentInfo.classList.add('about-content-correspondent-info')

    let h2 = document.createElement('h2')
    h2.textContent = 'Come and join us!'
    contentCorrespondentInfo.appendChild(h2)

    let para = document.createElement('p')
    para.textContent = 'We have just opened our cafe here in Samara'
    contentCorrespondentInfo.appendChild(para)

    para = document.createElement('p')
    para.textContent = 'We are ready to offer plenty of goods for you! Check out our Menu section'
    contentCorrespondentInfo.appendChild(para)

    para = document.createElement('p')
    para.textContent = 'And now our doors are opened from 9 a.m to 9 p.m. You can find us in Contacts section'
    contentCorrespondentInfo.appendChild(para)

    content.appendChild(contentCorrespondentInfo)
}

export default renderAboutPage