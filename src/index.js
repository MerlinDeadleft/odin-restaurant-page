import "./css/styles.css";
import { buildHomeTab } from "./tabs/home/home.js";
import { buildMenuTab } from "./tabs/menu/menu.js";
import { buildAboutTab } from "./tabs/about/about.js";

const contentDiv = document.querySelector("#content");

const homeTab = buildHomeTab();
contentDiv.appendChild(homeTab);

const menuTab = buildMenuTab();
menuTab.classList.add("hidden");
contentDiv.appendChild(menuTab);

const aboutTab = buildAboutTab();
aboutTab.classList.add("hidden");
contentDiv.appendChild(aboutTab);

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", handleHomeClicked);

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", handleMenuClicked);

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click", handleAboutClicked);

function handleHomeClicked() {
    homeTab.classList.remove("hidden");
    menuTab.classList.add("hidden");
    aboutTab.classList.add("hidden");
}

function handleMenuClicked() {
    homeTab.classList.add("hidden");
    menuTab.classList.remove("hidden");
    aboutTab.classList.add("hidden");
}

function handleAboutClicked() {
    homeTab.classList.add("hidden");
    menuTab.classList.add("hidden");
    aboutTab.classList.remove("hidden");
}
