// JavaScript Document
console.log("hi");

////////
//tabs// bron: https://youtu.be/5L6h_MrNvsk?feature=shared
////////
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault(); 

        tabContents.forEach(content => content.classList.remove('active'));

    
        tabs.forEach(t => t.classList.remove('active'));

        
        const target = document.querySelector(tab.dataset.tabTarget);

        
        if (target) {
            target.classList.add('active'); 
            tab.classList.add('active');   
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

        
        menuButton.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
        console.log(mainMenu.hidden); 

    });
});

