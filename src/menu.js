import tsarBomba from "./Tsar_Bomba_Revised.jpg";
import fatMan from "./Fat_Man.jpg";
import littleBoy from "./Little_boy.jpg";
import mk17 from "./Mk17_bomb.jpg";


const menuItems = [
        {
            name: "Tsar Bomba",
            lifespan: "60",
            calories: "50,000,000,000",
            image: tsarBomba,
            source: "https://en.wikipedia.org/wiki/Tsar_Bomba"
        }, 
        {
            name: "\"Fat Man\"",
            lifespan: "75",
            calories: "21,000,000,000",
            image: fatMan,
            source: "https://en.wikipedia.org/wiki/Fat_Man"
        }, 
        {
            name: "\"Little Boy\"",
            lifespan: "75",
            calories: "15,000,000,000",
            image: littleBoy,
            source: "https://en.wikipedia.org/wiki/Little_Boy"
        }, 
        {
            name: "Mark 17",
            lifespan: "70",
            calories: "17,000,000,000,000",
            image: mk17,
            source: "https://en.wikipedia.org/wiki/Mark_17_nuclear_bomb"
        }, 
    ]

const loadMenuPage = function() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.classList = [];
    content.classList.add('menu-content-page');

    const header = document.createElement('h1');
    header.classList.add('menu-header');
    header.textContent = "Our Menu";
    content.appendChild(header);

    const menuContainer = document.createElement('ul');
    menuContainer.classList.add('menu-container');

    menuItems.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add("menu-item-card");

        const topSection = document.createElement('a');
        topSection.setAttribute('href', item.source);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = "menu item image";
        img.classList.add('menu-item-picture');
        topSection.appendChild(img);

        li.appendChild(topSection);

        const bottomSection = document.createElement('div');
        
        const itemHeader = document.createElement('h2');
        itemHeader.classList.add('item-header');
        itemHeader.textContent = item.name;
        bottomSection.appendChild(itemHeader);

        const itemLifespan = document.createElement('p');
        itemLifespan.classList.add('item-lifespan');
        itemLifespan.textContent = `Served for over ${item.lifespan} years`;
        bottomSection.appendChild(itemLifespan);

        const itemCalories = document.createElement('p');
        itemCalories.classList.add('item-calories');
        itemCalories.textContent = `${item.calories} Calories`;
        bottomSection.appendChild(itemCalories);

        li.appendChild(bottomSection);

        menuContainer.appendChild(li);
    })

    content.appendChild(menuContainer);

}

export {loadMenuPage};