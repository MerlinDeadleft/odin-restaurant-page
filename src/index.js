import { buildHomeTab } from "./tabs/home/home.js";
import { buildMenuTab } from "./tabs/menu/menu.js";
import { buildAboutTab } from "./tabs/about/about.js";

const contentDiv = document.querySelector("#content");

const homeTab = buildHomeTab();
contentDiv.appendChild(homeTab);

const menuTab = buildMenuTab();
contentDiv.appendChild(menuTab);

const aboutTab = buildAboutTab();
contentDiv.appendChild(aboutTab);
