// email


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
        .bindPopup("11th Hour Innovation Properties LTD")
        .openPopup();

      L.marker([51.5272368, -0.0886654])
        .addTo(map)
        .bindPopup("11th Hour Innovation Properties LTD")
        .openPopup();
    },
    function () {
      return null;
    }
  );
}
