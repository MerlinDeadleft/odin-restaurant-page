import openingHours from "../../data/openingHours.json";

function buildOpeningHoursDiv() {
    const hoursDiv = document.createElement("div");
    
    const hoursText = document.createElement("p");
    hoursText.textContent = "Our doors are open seven days a week. Hitch your wagon, make yourself at home and join us:";

    const hoursTable = buildOpeningHoursTable();
    
    hoursDiv.appendChild(hoursText);
    hoursDiv.appendChild(hoursTable);

    return hoursDiv;
}

function buildOpeningHoursTable() {
    const table = document.createElement("table");
    
    const tableCaption = document.createElement("caption");
    tableCaption.textContent = "Hours";

    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    
    const dayHeader = document.createElement("th");
    dayHeader.textContent = "Day";
    const openHeader = document.createElement("th");
    openHeader.textContent = "Open";
    const closeHeader = document.createElement("th");
    closeHeader.textContent = "Close";
    
    headerRow.appendChild(dayHeader);
    headerRow.appendChild(openHeader);
    headerRow.appendChild(closeHeader);
    tableHeader.appendChild(headerRow);

    const tableBody = document.createElement("tbody");
    const dataRows = buildOpeningHoursDataRows();
    dataRows.forEach(dataRow => tableBody.appendChild(dataRow));
    
    table.appendChild(tableCaption);
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    return table;
}

function buildOpeningHoursDataRows() {
    const rows = [];

    for(let i = 0; i < openingHours.length; i++) {
        const dataRow = document.createElement("tr");
        
        const header = document.createElement("th");
        header.textContent = openingHours[i].day;
        header.setAttribute("scope", "row");
        
        const openData = document.createElement("td");
        openData.textContent = openingHours[i].open;
        
        const closeData = document.createElement("td");
        closeData.textContent = openingHours[i].close;
        
        dataRow.appendChild(header);
        dataRow.appendChild(openData);
        dataRow.appendChild(closeData);
        
        rows.push(dataRow);
    }

    return rows;
}

export { buildOpeningHoursDiv }
