const contact_btn = document.getElementById("contact-btn");
const form_submit = document.getElementById("your-form-id"); // Replace "your-form-id" with your actual form ID

function contact_us() {
  let contact = {
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const templateID = "template_dq1x46u";
  const serviceID = "service_6rwda4a";

  emailjs
    .send(serviceID, templateID,  contact)
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

// Assuming contact_btn is a form element
form_submit.addEventListener("submit", function (e) {
  e.preventDefault();
  contact_us();
});
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
    },
    function () {
      return null;
    }
  );
}
