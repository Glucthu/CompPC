function initMap() {
    const uluru = { lat: -34.70, lng: -58.58 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
}

function VerifyCaptcha(e){
  var verification;
  verification = grecaptcha.getResponse();
  document.getElementById("send").addEventListener("click", function(event){});
  if (verification == null || verification == "") {
      event.preventDefault();
      return false;
  }
}