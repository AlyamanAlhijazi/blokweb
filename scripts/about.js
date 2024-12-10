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


const playButton = document.getElementById('play-video');
const closeButton = document.getElementById('close-video');
const videoOverlay = document.getElementById('video-overlay');

playButton.addEventListener('click', () => {
  videoOverlay.removeAttribute('hidden');
  console.log(videoOverlay.hasAttribute('hidden'));
});

closeButton.addEventListener('click', () => {
  videoOverlay.setAttribute('hidden', '');

});