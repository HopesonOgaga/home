let map = document.getElementById("map");
const form_cont = document.getElementById("your-form-id");

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
      form_cont.reset();
      console.log(res);
      alert("Email sent successfully");
    })
    .catch((err) => {
      console.error(err);
      alert("Error sending email");
    });
}
form_cont.addEventListener("submit", function (e) {
  e.preventDefault();
  contact_us();
});
