
let content = document.getElementById('content')

export function loadMenu() {
    content.removeChild(content.lastElementChild)
    
    console.log('Building the Menu...')

    let mainMenu = document.createElement('div')
    mainMenu.id = 'menu-body'

    class Dish {
        constructor(name, desc, img) {
            this.name = name;
            this.desc = desc;
            this.img = img;
        }
    }

    const fullMenu = []
    let dish1 = new Dish('Roast Boar', 'Hunted in the forests near Talfin, these Wild Boars are known for their aggressive natures. However, they also possess some of the tastiest meat! Roasted over a fire and seasoned with our Tavern Special Spice, the only thing about this boar you need to fear is how good it tastes!', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/beef.jpg?raw=true')
    let dish2 = new Dish('Fire-Roasted Fowl', 'Dragonmere ducks stuffed with a blend of locally-sourced potatoes, carrots, sprouts, and spices, perfected over the last 30 years, this dish is one of the tavern\'s favorites.', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/chicken.jpeg?raw=true')
    let dish3 = new Dish('Forest\'s Delight', 'Changing seasonally, this dish is comprised of whatever our chefs feel called to mix together using only ingredients from the surrounding forests (and sometimes our garden shhh). Ask our staff what the current dish looks like', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/forest-delight.jpg?raw=true')
    let dish4 = new Dish('Tomato Stew', 'Grown locally, we slice, dice, and spice these veggies to perfection to give you the best bowl of food you\'ve ever eaten (hopefully).', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/soup.jpg?raw=true')
    let dish5 = new Dish('Grilled Cheese', 'Yeah, it\'s just as good as it looks. Try it if you don\'t believe me.', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/grilled-cheese.jpg?raw=true')
    let dish6 = new Dish('Wood-Fired Tiger Leeks', 'Seared on a bed of repurposed swords, these delectable tiger-striped leeks make the perfect side dish or main dish...or maybe pallete cleanser between 2 other dishes?', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/tiger-leeks.jpg?raw=true')
    let dish7 = new Dish('Grilled Ox Tacos', 'Sourced from farmers in the Giant\'s Plain, these cattle offer tasty, tender meat that go perfect with our rosemary crema and truffle radishes to make a not so \'plain\' tasting meat.', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/tacos.jpg?raw=true')
    let dish8 = new Dish('Savory Souffle', 'It\'s got flour, eggs, honey, vegetables, cheese, butter, and meat upon request...what more could you need?', 'https://github.com/bryce-wiseman/odin-restaurant-page/blob/main/images/ratatat.jpg?raw=true')
    fullMenu.push(dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8)
    console.log(fullMenu[0]["name"])

    
    for (let i = 0; i < fullMenu.length; i++) {

        console.log('dish' + i)

    let newDish = document.createElement('div')
    newDish.className = 'menu-content'
//left side of dish
    let dishLeft = document.createElement('div')
    dishLeft.className = 'left-dish'

    let newTitle = document.createElement('h2')
    newTitle.innerHTML = fullMenu[i]["name"]
    dishLeft.appendChild(newTitle)

    let newDesc = document.createElement('p')
    newDesc.innerHTML = fullMenu[i]["desc"]
    dishLeft.appendChild(newDesc)
    newDish.appendChild(dishLeft)
//right side of dish
    let dishRight = document.createElement('div')
    dishRight.className = 'right-dish'

    let newImg = document.createElement('img')
    newImg.src = fullMenu[i]["img"]
    newImg.className = 'menu-img'
    dishRight.appendChild(newImg)
    newDish.appendChild(dishRight)

    mainMenu.appendChild(newDish)
    }

    content.appendChild(mainMenu)
}