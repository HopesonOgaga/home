//
const close_menu = document.querySelector('.close-menu')
const open_menu = document.querySelector('.open-menu')
const menu_options = document.querySelector('.menu-options')

menu_options.classList.add('hidden')

open_menu.addEventListener('click', function(){
    console.log('yo')
    open_menu.classList.add('hidden')
    close_menu.classList.remove('hidden')
    menu_options.classList.remove('hidden')
})


close_menu.addEventListener('click', function(){
  console.log('yo')
  close_menu.classList.add('hidden')
  open_menu.classList.remove('hidden')
  menu_options.classList.add('hidden')
})

// email section








// mapn
let map = document.getElementById("map");
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let map = L.map("map").setView([51.5272401, -0.0912403], 13);

      L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5272401, -0.0912403])
        .addTo(map)
        .bindPopup("prosure solutions limited ")
        .openPopup();
    },
    function () {
      alert("please turn on location");
    }
  );
}
