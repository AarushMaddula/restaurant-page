import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import loadAboutPage from "./about";

const homeButton = document.querySelector('#right-section-header > button:nth-child(1)');
homeButton.addEventListener('click', () => {
    loadHomePage();
})

const menuButton = document.querySelector('#right-section-header > button:nth-child(2)');
menuButton.addEventListener('click', () => {
    loadMenuPage();
})

const aboutButton = document.querySelector('#right-section-header > button:nth-child(3)');
aboutButton.addEventListener('click', () => {
    loadAboutPage();
})

loadHomePage();