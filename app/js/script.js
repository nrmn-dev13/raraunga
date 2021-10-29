console.log("Load script.js");

// Instantiating the global app object
var app = {};

const toggleIcon = document.querySelector(".action--toggle");
const markerInfoCard = document.querySelector(".card--bottom");
toggleIcon.addEventListener("click", ()=>{
  markerInfoCard.classList.toggle("active");
});
