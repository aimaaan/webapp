var service;
var map;

function getPlaceDetails() {
    var request = {
        placeId: new URLSearchParams(window.location.search).get('placeId'), 
        fields: ['name', 'rating', 'formatted_address', 'url']
    };

    service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);
}

function callback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        document.getElementById('place-name').textContent = place.name;
        document.getElementById('place-address').textContent = place.formatted_address;
        document.getElementById('review-link').href = place.url;
    }
}

$(document).ready(function() {
    map = new google.maps.Map(document.createElement('div'), {
        center: {lat: -33.866, lng: 151.196},
        zoom: 15
    });

    getPlaceDetails();
});
