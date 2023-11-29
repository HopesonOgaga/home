// email
 const floating_email = document.getElementById('floating_email')
 const floating_company_name = document.getElementById('floating-company-name')
 const  floating_Company_registration_number = document.getElementById('floating_Company-registration-number')
 const  floating_first_name = document.getElementById('floating-first-name')
 const  floating_last_name = document.getElementById('floating-last-name')
 const floating_phone = document.getElementById('floating-phone')
 const default_checkbox = document.getElementById('default-checkbox')



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
