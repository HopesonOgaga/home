//
const close_menu = document.querySelector(".close-menu");
const open_menu = document.querySelector(".open-menu");
const menu_options = document.querySelector(".menu-options");
const doc_card = document.querySelector(".documet-card");
const more_card = document.querySelector(".more-card");
const doc_test = document.querySelector(".document-test");
const menu_test = document.querySelector(".menu-test");

menu_options.classList.add("hidden");



// mapn
// let map = document.getElementById("map");
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       let map = L.map("map").setView([51.5272401, -0.0912403], 13);

//       L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       L.marker([51.5272401, -0.0912403])
//         .addTo(map)
//         .bindPopup("11th Hour Innovation Properties LTD")
//         .openPopup();

//         L.marker([51.5272368, -0.0886654])
//         .addTo(map)
//         .bindPopup("11th Hour Innovation Properties LTD")
//         .openPopup()
//     },
//     function () {
//       console.log('bug of')
//     }
//   );
// }
