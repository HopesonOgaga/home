const form_submit = document.querySelector(".form-tenant");
const land_form = document.getElementById("land-form");
function sendMail() {
  let params = {
    email_address: document.getElementById("email-address").value,
    number_bedroom: document.getElementById("number-name").value,
    company_reg_num: document.getElementById("company-reg-num").value,
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    company_let_type: document.getElementById("company-let-type").value,
    phone_number: document.getElementById("phone-number").value,
    budget_text: document.getElementById("max-budget").value,
    location_type: document.getElementById("preferred-location").value,
  };

  const templateID = "template_trl6a35";
  const serviceID = "service_j8oc0um";

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

//landloard email

function land_lord_mail() {
  let info = {
    land_lord_mail: document.getElementById("landlord-email").value,
    land_lord_firstname: document.getElementById("landlord-first-name").value,
    land_lord_lastname: document.getElementById("landlord-last-name").value,
    phone_details: document.getElementById("floating_phone").value,
    land_lord_address: document.getElementById("owner-addres").value,
    preferred_property: document.getElementById("property-type").value,
    living_rooms: document.getElementById("living-rooms").value,
    number_bedroom: document.getElementById("property-type").value,
    extra_informaiton: document.getElementById("extra-informaiton").value,
    reason_renting: document.getElementById("reason-renting").value,
    default_checkbox: document.getElementById("default-checkbox").checked
      ? "Checked"
      : "Unchecked", // Use checked property for checkboxes
  };
  const templateID = "template_trl6a35";
  const serviceID = "sservice_qn83mcd";

  emailjs
    .send(serviceID, templateID, info)
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
//contact us form
function contact_us() {
  contact = {
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const templateID = "";
  const serviceID = "";
  emailjs
    .send(serviceID, templateID, contact)
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
      console.log("test");
    }
  );
}
