function initMap() {
    const arg = { lat: -34.70, lng: -58.58 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: arg,
    });
}

function VerifyCaptcha(e){
  var verification;
  verification = grecaptcha.getResponse();
  document.getElementById("send").addEventListener("click", function(event){});
  if (verification == null || verification == "") {
      event.preventDefault();
      alert("Por favor, verifique el CAPTCHA");
      return false;
  }
}