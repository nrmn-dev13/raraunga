console.log("Load script.js");var app={};const toggleIcon=document.querySelector(".action--toggle"),markerInfoCard=document.querySelector(".card--bottom");let map;function initMap(){const s={lat:-25.363,lng:131.044},e=new google.maps.Map(document.getElementById("map"),{zoom:4,center:s}),l=new google.maps.InfoWindow({content:'<div class="card card--list"><div class="title-wrapper"><h4 class="title"> Eden Terrace</h4><i class="fas fa-times-circle"></i></div><div class="eligible-wrapper"><div class="text">Eligible Population </div><div class="text text--number">254</div></div><ul class="list"><li class="list__item list__item--progress unvaccinated"><div class="progress-wrapper"><h6 class="title">Unvaccinated</h6><p class="text">48</p><progress class="progress-bar" id="file" value="32" max="100"> 32% </progress><div><li><li class="list__item list__item--progress first-dose"><div class="progress-wrapper"><h6 class="title">First Dose</h6><p class="text">48</p><progress class="progress-bar" id="file" value="32" max="100"> 32% </progress><div><li><li class="list__item list__item--progress second-dose"><div class="progress-wrapper"><h6 class="title">Second Dose</h6><p class="text">48</p><progress class="progress-bar" id="file" value="32" max="100"> 32% </progress><div><li><ul></div>'}),a=new google.maps.Marker({position:s,map:e,title:"Hello World!"});a.addListener("click",(()=>{l.open({anchor:a,map:e,shouldFocus:!1})})),e.addListener("click",(()=>{l.close()}))}toggleIcon.addEventListener("click",(()=>{markerInfoCard.classList.toggle("active")})),app.global={init:function(){console.log("load global functions"),app.global.loadHeader()},loadHeader:function(){console.log("loadHeader()")}},app.global.init();
//# sourceMappingURL=all.js.map