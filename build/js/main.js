const form_submit = document.querySelector(".form-tenant");

function sendMail() {
  let params = {
    email_address: document.getElementById("email-address").value,
    company_name: document.getElementById("company-name").value,
    company_reg_num: document.getElementById("company-reg-num").value,
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    tenant_pre_location: document.getElementById("tenant-looking").value,
    phone_number: document.getElementById("phone-number").value,
    default_checkbox: document.getElementById("default-checkbox").checked
      ? "Checked"
      : "Unchecked", // Use checked property for checkboxes
    budget_text: document.getElementById("max-budget").value,
    building_type: document.getElementById("preferred-building").value,
  };

  const templateID = "template_trl6a35";
  const serviceID = "service_6rwda4a";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Reset form fields on successful submission
      form_submit.reset();
      console.log(res);
      alert("Email sent successfully");
    })
    .catch((err) => {
      console.error(err);
      alert("Error sending email");
    });
}

form_submit.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMail();
});

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
