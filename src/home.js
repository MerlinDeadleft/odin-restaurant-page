import { buildOpeningHoursDiv } from "./openingHours.js";

function buildHomeTab() {
    const homeTab = document.createElement("div");
    homeTab.id = "home";
    
    const welcomeDiv = buildWelcomeDiv();
    homeTab.appendChild(welcomeDiv);
    
    const openingHoursDiv = buildOpeningHoursDiv();
    homeTab.appendChild(openingHoursDiv);
    
    return homeTab;
}

function buildWelcomeDiv() {
    const welcomeDiv = document.createElement("div");
    
    const welcomeHeader = document.createElement("h2");
    welcomeHeader.textContent = "Welcome to [restaurant name] - The best restaurant west of the river!";
    
    const welcomeText = document.createElement("p");
    welcomeText.textContent = "Pull up a chair and bring your appetite! From hearty breakfasts and high noon lunches to satisfying suppers, we make sure everyone gets their fill.";
    
    welcomeDiv.appendChild(welcomeHeader);
    welcomeDiv.appendChild(welcomeText);
    
    return welcomeDiv;
}

export { buildHomeTab }
