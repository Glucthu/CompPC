function initMap() {
    const uluru = { lat: -34.70, lng: -58.58 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
}