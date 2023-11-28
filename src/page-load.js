import {loadHome} from './home-page'
import {loadMenu} from './menu-page'
import {loadContact} from './contact-page'
import './style.css'


export function makeHeader() {
    let header = document.createElement('div')
    header.id = 'header'

    let icon = document.createElement('img')
    icon.src = 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/deer.png?raw=true' 
    icon.id = 'logo'
    header.appendChild(icon)

    let name = document.createElement('h1')
    name.textContent = 'The Black Stag'
    name.id = 'name'
    header.appendChild(name)

    return header
}

export function makeReview() {
    let review = document.createElement('div')
    review.textContent = 'Voted "One of Faerun\'s Best Restaurants" 40 Years Running'
    review.id = 'banner'

    return review
}

export function makeNav() {
    let navBar = document.createElement('div')
    navBar.id = 'nav-bar'


    let homeBtn = document.createElement('btn')
    homeBtn.textContent = 'Home'
    homeBtn.id = 'homeNav'
    homeBtn.className = 'navBtn'
    homeBtn.onclick = loadHome
    navBar.appendChild(homeBtn)

    let menuBtn = document.createElement('btn')
    menuBtn.textContent = 'Menu'
    menuBtn.id = 'menuNav'
    menuBtn.className = 'navBtn'
    menuBtn.onclick = loadMenu
    navBar.appendChild(menuBtn)

    let contactBtn = document.createElement('btn')
    contactBtn.textContent = 'Contact'
    contactBtn.id = 'contactNav'
    contactBtn.className = 'navBtn'
    contactBtn.onclick = loadContact
    navBar.appendChild(contactBtn)

    return navBar
}


export function makeWaste() {
    let waste = document.createElement('div')
    return waste
}

document.body.onload = loadHome
