import { adjustFontSizes } from "./adjustFontSize.js";


const data = {
    singleSeries: [
        { label: "Simple Label", value: 10 }
    ],
    multiSeries: [
        { label: "Simple Label 1", value: 13 },
        { label: "Simple Label 2", value: 44 },
        { label: "Simple Label 3", value: 100 },
        { label: "Simple Label 4", value: 987 },
        { label: "Simple Label 5", value: 200 },
        { label: "Simple Label 6", value: 55 }
    ]
};

// Function to dynamically render stats from the data object
function renderStats(panelClass, dataArray) {
    const panel = document.querySelector(panelClass);
    panel.innerHTML = ""; // Clear any existing content
    
    dataArray.forEach((item) => {
        const statElement = document.createElement("div");
        statElement.classList.add("stat");

        const labelElement = document.createElement("div");
        labelElement.classList.add("label");
        labelElement.textContent = item.label; // Set the label

        const valueElement = document.createElement("div");
        valueElement.classList.add("value");
        valueElement.textContent = item.value; // Set the value

        // Append the label and value to the stat element
        statElement.appendChild(labelElement);
        statElement.appendChild(valueElement);

        // Append the stat element to the panel
        panel.appendChild(statElement);
    });
}


window.addEventListener("resize", () => {
    const singleSeriesPanel = document.querySelector(".single-series");
    const multiSeriesPanel = document.querySelector(".multi-series");

    adjustFontSizes(singleSeriesPanel);
    adjustFontSizes(multiSeriesPanel);
});

// Initialize the font sizes and render the stats
document.addEventListener("DOMContentLoaded", () => {
    const singleSeriesPanel = document.querySelector(".single-series");
    const multiSeriesPanel = document.querySelector(".multi-series");

    // Render the stats from the data object
    renderStats(".single-series", data.singleSeries);
    renderStats(".multi-series", data.multiSeries);

    // Adjust the font sizes after rendering the stats
    adjustFontSizes(singleSeriesPanel);
    adjustFontSizes(multiSeriesPanel);
});
