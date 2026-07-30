import { buildHomeTab } from "./home.js";
import { buildMenuTab } from "./menu.js";
import { buildAboutTab } from "./about.js";

const contentDiv = document.querySelector("#content");

const homeTab = buildHomeTab();
contentDiv.appendChild(homeTab);

const menuTab = buildMenuTab();
contentDiv.appendChild(menuTab);

const aboutTab = buildAboutTab();
contentDiv.appendChild(aboutTab);
