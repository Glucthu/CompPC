import {getCLS, getFID, getLCP} from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
      fetch('/analytics', {body, method: 'POST', keepalive: true});
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

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
      return false;
  }
}