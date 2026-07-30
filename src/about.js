function buildAboutTab() {
    const aboutTab = document.createElement("div");
    aboutTab.id = "about";

    const headline = document.createElement("h2");
    headline.textContent = "About";

    const aboutWarning = document.createElement("p");
    aboutWarning.textContent = "This is a fictional website for portfolio purposes. No real products or services are offered. [Restaurant Name] is not a real establishment."

    const aboutText = document.createElement("p");
    aboutText.textContent = "This website was created as part of ";

    const odinProjectLink = document.createElement("a");
    odinProjectLink.setAttribute("href", "https://www.theodinproject.com/about");
    odinProjectLink.setAttribute("target", "_blank");
    odinProjectLink.textContent = "The Odin Project";
    aboutText.appendChild(odinProjectLink);

    aboutText.append(" more specifically for the ");
    
    const restaurantPageAssignmentLink = document.createElement("a");
    restaurantPageAssignmentLink.setAttribute("href", "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page");
    restaurantPageAssignmentLink.setAttribute("target", "_blank");
    restaurantPageAssignmentLink.textContent = "Restaurant Page Assignment";
    aboutText.appendChild(restaurantPageAssignmentLink);

    aboutText.append(".");
    aboutText.appendChild(document.createElement("br"));
    aboutText.append("As of writing the assignment focuses on DOM Manipulation using JavaScript by rendering the site's content dynamically as well as bundling using Webpack.");
    aboutText.appendChild(document.createElement("br"));
    aboutText.append("Nearly all DOM elements on this site were created using Javascript, styling is done using CSS and the whole codebase is bundled using Webpack.");
    
    const gitRepoText = document.createElement("p");
    gitRepoText.textContent = "This site's code can be accessed on this ";
    
    const gitRepoLink = document.createElement("a");
    gitRepoLink.setAttribute("href", "https://github.com/MerlinDeadleft/odin-restaurant-page");
    gitRepoLink.setAttribute("target", "_blank");
    gitRepoLink.textContent = "GitHub repository";
    gitRepoText.appendChild(gitRepoLink);

    gitRepoText.append(".");
    aboutText.appendChild(gitRepoText);

    aboutTab.appendChild(headline);
    aboutTab.appendChild(aboutWarning);
    aboutTab.appendChild(aboutText);

    return aboutTab;
}

export { buildAboutTab }
