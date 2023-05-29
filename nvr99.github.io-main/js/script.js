function initMap() {
    const buenosAires = { lat: -34.6037, lng: -58.3816 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: buenosAires,
        zoom: 14,
    });
    const marker = new google.maps.Marker({
        position: buenosAires,
        map: map,
    });
}