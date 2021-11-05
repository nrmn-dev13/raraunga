console.log("Load script.js");

// Instantiating the global app object
var app = {};

const toggleIcon = document.querySelector(".action--toggle");
const markerInfoCard = document.querySelector(".card--bottom");
toggleIcon.addEventListener("click", ()=>{
  markerInfoCard.classList.toggle("active");
});

let map;

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  const contentString =
    '<div class="card card--list">' +
    '<h4 class="title"> Eden Terrace</h4>' +
    '<div class="eligible-wrapper">' +
    '<div class="text">Eligible Population </div>' +
    '<div class="text text--number">254</div>' +
    '</div>' +
    '<ul class="list">' +
    '<li class="list__item list__item--progress unvaccinated">' +
    '<div class="progress-wrapper">' +
    '<h6 class="title">Unvaccinated</h6>' +
    '<p class="text">48</p>' +
    '<progress class="progress-bar" id="file" value="32" max="100"> 32% </progress>' +
    '<div>' +
    '<li>' +
    '<li class="list__item list__item--progress first-dose">' +
    '<div class="progress-wrapper">' +
    '<h6 class="title">First Dose</h6>' +
    '<p class="text">48</p>' +
    '<progress class="progress-bar" id="file" value="32" max="100"> 32% </progress>' +
    '<div>' +
    '<li>' +
    '<li class="list__item list__item--progress second-dose">' +
    '<div class="progress-wrapper">' +
    '<h6 class="title">Second Dose</h6>' +
    '<p class="text">48</p>' +
    '<progress class="progress-bar" id="file" value="32" max="100"> 32% </progress>' +
    '<div>' +
    '<li>' +
    '<ul>' +
    '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  map.addListener("click", () => {
    infowindow.close();
  });
}