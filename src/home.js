import "./style.css";
import menuPicture from "./story-3765-768x432.jpeg";


const loadHomePage = function() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.classList = [];
    content.classList.add('home-content-page');

    const restaurantInfo = document.createElement('div');
    restaurantInfo.classList.add("restaurant-description");

    const header = document.createElement('h1');
    header.textContent = "EXPERIENCE THE POWER OF FISSION";
    restaurantInfo.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Here at The Nuclear Option, we offer only the finest of nuclear weapons, hand-crafted by renowned world-class chefs such as the  J. Robert Oppenheimer. Situated in the heart of the U.S. Miltary Complex, The Nuclear Option has spend 80 years carefully refining and testing our offerings. With cuisines ranging from the American Freedom to the Communist Delight, our menu is designed to cater to any nation's palette. Order online or visit us today!"
    restaurantInfo.appendChild(paragraph);

    content.appendChild(restaurantInfo);


    const menuItemPicture = document.createElement('div');
    menuItemPicture.classList.add("home-picture");

    const img = document.createElement('img');
    img.setAttribute('src', menuPicture);
    img.setAttribute('alt', 'missle-launch');
    menuItemPicture.appendChild(img);

    const caption = document.createElement('div');
    caption.classList.add('picture-caption');
    caption.textContent = "Photo credit: Russian Ministry of Defence CC BY 4.0";
    menuItemPicture.appendChild(caption);

    content.appendChild(menuItemPicture);
};

export {loadHomePage};