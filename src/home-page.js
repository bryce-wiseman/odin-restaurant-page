
let content = document.getElementById('content')

export function loadHome() {
    content.removeChild(content.lastElementChild)

    console.log('Building Home Page...')

    let main = document.createElement('div')
    main.id = 'main-box'

    let about = document.createElement('div')
    about.id = 'about'
    about.className = 'main-content'
    about.textContent = 'Established only 200 years ago, The Black Stag has persisted through the War of Shadows and the Rising of the Dragons to become a top-rated gourmet dining experience.'
    main.appendChild(about)

    let location = document.createElement('div')
    location.id = 'location'
    location.className = 'main-content'
    location.textContent = 'Located in the heart of the Forgotten Realms, the original site of The Black Stag is situated in the charming city of Ilipur with a beautiful view of the coast off of The Dragonmere.'
    let map = document.createElement('img')
    map.src = 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/faerun.jpg?raw=true'
    map.id = 'map'
    location.appendChild(map)
    main.appendChild(location)

    let reserve = document.createElement('div')
    reserve.id = 'reserve'
    reserve.className = 'main-content'
    reserve.textContent = 'If you wish to make a reservation at The Black Stag please send a messenger raven or squire with a scroll detailing your party size and any meal requests at least one long rest in advance.'
    main.appendChild(reserve)

    content.appendChild(main)
}