// Initialize and add the map
let map;

function initMap(restaurants) {
    let coordinate = {lat: 37.17599, lng: -3.59904};
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: coordinate});

}

function initMarkers(restaurants) {
    restaurants.forEach(addMarker)
}

function addMarker(element) {
    let myLatlng = new google.maps.LatLng(element["lat"], element["long"]);
    let marker = new google.maps.Marker({
        position: myLatlng,
        title: element["name"],
        label: element["name"][0],
        map: map
    });
    marker.addListener('click', function () {
        alert("asd");
    });


}