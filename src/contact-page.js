
let content = document.getElementById('content')

export function loadContact() {
    content.removeChild(content.lastElementChild)

    console.log('Building Contact Page...')

    let main = document.createElement('div')
    main.id = 'main-content'

    let local = document.createElement('div')
    local.id = 'local'
    local.className = 'contact-content'
    local.textContent = 'If you live in or visit the great city of Ilipur and wish to make a reservation, complaint, or request to work with us, please seek out Gordon of House Ramsey.'
    main.appendChild(local)

    let distant = document.createElement('div')
    distant.id = 'distant'
    distant.className = 'contact-content'
    distant.textContent = 'If you are located outside the walls of Ilipur please send a messenger pigeon/raven/owl/person to inform us about your question and or request. Please allow 2-18 days response time depending on seasonal wyvern attacks.'
    main.appendChild(distant)

    content.appendChild(main)
}