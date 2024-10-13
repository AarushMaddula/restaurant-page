import map from "./map.png";

const loadAboutPage = function() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.classList = [];
    content.classList.add('about-content-page');

    const header = document.createElement('h1');
    header.classList.add('about-header');
    header.textContent = "About Us";
    content.appendChild(header);

    const aboutContainer = document.createElement('ul');
    aboutContainer.classList.add('about-container');

    const leftSection = document.createElement('div');
    leftSection.classList.add('left-about-section');
    
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Hours:"
    leftSection.appendChild(hoursHeader);
    
    const hours = document.createElement('p');
    hours.textContent = "Mon - Fri: 9 AM - 4 PM";
    leftSection.appendChild(hours);
    
    const phoneNumberHeader = document.createElement('h2');
    phoneNumberHeader.textContent = "Phone Number:"
    leftSection.appendChild(phoneNumberHeader);
    
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "(703) 545-6700";
    leftSection.appendChild(phoneNumber);
    
    const coordinatesHeader = document.createElement('h2');
    coordinatesHeader.textContent = "Coordinates:"
    leftSection.appendChild(coordinatesHeader);

    const coordinates = document.createElement('p');
    coordinates.textContent = "38°52′15″N 77°03′18″W﻿"
    leftSection.appendChild(coordinates);

    aboutContainer.appendChild(leftSection);

    const rightSection = document.createElement('div');
    rightSection.classList.add('right-about-section');

    const img = document.createElement('img');
    img.src = map;
    img.alt = "menu item image";
    rightSection.appendChild(img);

    aboutContainer.appendChild(rightSection);


    content.appendChild(aboutContainer);
}

export default loadAboutPage;