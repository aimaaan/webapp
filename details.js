$(document).ready(function() {
    var properties = [
        { location: 'Putrajaya', description: 'Bazzar Ramadhan Masjid Besi', imageUrl: 'https://assets.hmetro.com.my/images/articles/2016_PJ060616FH004_1585627422.jpg' },
        { location: 'Kuala Lumpur', description: 'Bazzar Ramadhan Kuala Lumpur', imageUrl: 'https://live.staticflickr.com/7111/7652632638_59433eb21b_b.jpg' },
        { location: 'Johor', description: 'Bazzar Ramadhan Johor', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
        { location: 'Selangor', description: 'Bazzar Ramadhan Selangor', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
        { location: 'Negeri Sembilan', description: 'Bazzar Ramadhan Negeri Sembilan', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
        { location: 'Selangor', description: 'Bazzar Ramadhan Danau kota', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
        { location: 'Kelantan', description: 'Bazzar Ramadhan Kelantan', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
    ];

    var urlParams = new URLSearchParams(window.location.search);
    var location = urlParams.get('location');

    var property = properties.find(function(property) {
        return property.location === location;
    });

    if (property) {
        $('#property-image').attr('src', property.imageUrl);
        $('#property-location').text(property.location);
        $('#property-description').text(property.description);
    }
});

function initMap() {
    var propertyLocation = { lat: 2.9192942, lng: 101.6781248 }; // Replace with actual property location

    var map = new google.maps.Map(document.getElementById('property-map'), {
        zoom: 15,
        center: propertyLocation
    });

    var marker = new google.maps.Marker({
        position: propertyLocation,
        map: map
    });
}
