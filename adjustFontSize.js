export function adjustFontSizes(panel) {
    const statElements = panel.querySelectorAll(".stat");
    const panelWidth = panel.offsetWidth;
    const panelHeight = panel.offsetHeight;

    statElements.forEach((stat) => {
        const value = stat.querySelector(".value");
        const label = stat.querySelector(".label");

        // Adjust font size based on both width and height of the panel
        const fontSizelabel = panelWidth * 0.02; // Use both width and height
        const fontSizeval = panelWidth * 0.08; // Use both width and height

        // Scaling factor for font size with maximum limits
        label.style.fontSize = `${Math.min(fontSizelabel, 32)}px`; // Max label font size: 32px
        value.style.fontSize = `${Math.min(fontSizeval, 48)}px`;   // Max value font size: 48px
    });
}