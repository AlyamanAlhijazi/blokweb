// JavaScript Document
console.log("hi");

////////
//tabs// bron: https://youtu.be/5L6h_MrNvsk?feature=shared
////////
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault(); // Stop standaard link gedrag

        // Verwijder 'active' van alle tab-content
        tabContents.forEach(content => content.classList.remove('active'));

        // // Verwijder 'active' van alle tab-links (optioneel)
        tabs.forEach(t => t.classList.remove('active'));

        // Vind het doel-element via data-tab-target
        const target = document.querySelector(tab.dataset.tabTarget);

        // Controleer of het doel-element bestaat
        if (target) {
            target.classList.add('active'); // Voeg 'active' toe aan het doel
            tab.classList.add('active');   // Voeg 'active' toe aan de link 
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const mainMenu = document.getElementById("main-menu");

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", !isExpanded);
        mainMenu.hidden = isExpanded;

        // Verander de aria-label voor toegankelijkheid
        menuButton.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
        console.log(mainMenu.hidden); // Dit moet wisselen tussen true/false als je op de knop drukt

    });
});

