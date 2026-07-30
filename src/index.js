import { buildHomeTab } from "./home.js";
import { buildMenuTab } from "./menu.js";

const contentDiv = document.querySelector("#content");

const homeTab = buildHomeTab();
contentDiv.appendChild(homeTab);

const menuTab = buildMenuTab();
contentDiv.appendChild(menuTab);
