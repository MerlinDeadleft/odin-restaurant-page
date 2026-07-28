import { buildHomeTab } from "./home.js";

const contentDiv = document.querySelector("#content");

const homeTab = buildHomeTab();
contentDiv.appendChild(homeTab);
