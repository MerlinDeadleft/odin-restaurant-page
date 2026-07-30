import menuData from "../../data/menu.json";

function buildMenuTab() {
    const menuTab = document.createElement("div");
    menuTab.id = "menu";

    const headline = document.createElement("h2");
    headline.textContent = "Menu";
    
    const menu = document.createElement("div");
    const menuSections = buildMenuSections();
    
    menuSections.forEach(menuSection => {
        menu.appendChild(menuSection);
    });
    
    menuTab.appendChild(headline);
    menuTab.appendChild(menu);
    
    return menuTab;
}

function buildMenuSections() {
    const sections = [];

    menuData.forEach(sectionData => {
        const menuSection = document.createElement("div");

        const sectionHeadline = document.createElement("h3");
        sectionHeadline.textContent = sectionData.name;

        const sectionDescription = document.createElement("p");
        sectionDescription.textContent = sectionData.description;

        const itemsDiv = document.createElement("div");

        const items = buildMenuItems(sectionData);
        items.forEach(menuItem => {
            itemsDiv.appendChild(menuItem);
        });

        menuSection.appendChild(sectionHeadline);
        menuSection.appendChild(sectionDescription);
        menuSection.appendChild(itemsDiv);

        sections.push(menuSection);
    })

    return sections;
}

function buildMenuItems(menuSectionData) {
    const items = [];

    menuSectionData.items.forEach(menuItemData => {
        const item = document.createElement("div");

        const itemName = document.createElement("h4");
        itemName.textContent = menuItemData.name;
        
        const itemPrice = document.createElement("span");
        itemPrice.textContent = " - ";
        itemPrice.textContent += menuItemData.price;
        itemName.appendChild(itemPrice);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = menuItemData.description;
        
        item.appendChild(itemName);
        item.appendChild(itemDescription);

        items.push(item);
    });

    return items;
}

export { buildMenuTab }
