const form_submit = document.querySelector(".form-tenant");
const land_form = document.getElementById("land-form");
const scrooll_landlord = document.querySelector(".scroll--landlord");
const scroll_terms = document.querySelector(".scroll--terms");
const scroll_tenants = document.querySelector(".scroll--tenants");
const landlord_sc = document.getElementById("sc-form");
const map_hidden = document.querySelector(".map--hidden");
const land_btn = document.getElementById("land-submit");



//
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
  const serviceID = "service_6rwda4a";
  // zoho "service_j8oc0um"
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

function land_lord_mail() {
  let info = {
    email_address: document.getElementById("email-address").value,
    property_type: document.getElementById("property-type").value,
    living_rooms: document.getElementById("number-living-room").value,
    additional_info: document.getElementById("additional--infomation").value,
    reason_renting: document.getElementById("reason-renting").value, // Added .value here
    full_adress: document.getElementById("postcode").value,
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    phone_number: document.getElementById("phone-number").value,
  };
  const templateID = "template_trl6a35";
  const serviceID = "service_6rwda4a";

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

land_btn.addEventListener("submit", function (e) {
  e.preventDefault();
  land_lord_mail();
});

// email
function contact_mail() {
  let mail_info = {
    email_address: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const templateID = "template_dq1x46u";
  const serviceID = "service_6rwda4a";

  emailjs
    .send(serviceID, templateID, mail_info)
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

// map
let map = document.getElementById("map");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let map = L.map("map").setView(
        [position.coords.latitude, position.coords.longitude],
        13
      );

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

    function (error) {
      let map_hidden = document.getElementById("map_hidden");
      if (navigator.geolocation) {
        map_hidden.classList.add("hidden");
      } else {
        map_hidden.classList.remove("hidden");
      }
      console.error("Error getting geolocation:", error.message);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}
