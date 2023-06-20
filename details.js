$(document).ready(function() {
    var properties = [
        { location: 'Putrajaya', description: 'Bazzar Ramadhan Masjid Besi', imageUrl: 'https://assets.hmetro.com.my/images/articles/2016_PJ060616FH004_1585627422.jpg' },
        { location: 'Kuala Lumpur', description: 'Bazzar Ramadhan Kuala Lumpur', imageUrl: 'https://live.staticflickr.com/7111/7652632638_59433eb21b_b.jpg' },
        { location: 'Johor', description: 'Bazzar Ramadhan Johor', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
        { location: 'Selangor', description: 'Bazzar Ramadhan Selangor', imageUrl: 'https://media.myresipi.com/2022/04/bazaar-ramadhan.jpg' },
        { location: 'Negeri Sembilan', description: 'Bazzar Ramadhan Negeri Sembilan', imageUrl: 'https://sk-bucket.sgp1.digitaloceanspaces.com/2020/03/26164343/bazar-ramadhan-negeri-sembilan.jpg' },
        { location: 'Selangor', description: 'Bazzar Ramadhan Danau kota', imageUrl: 'https://www.faizalfredley.com/wp-content/uploads/2014/07/ramadhan-bazzars.jpg' },
        { location: 'Kelantan', description: 'Bazzar Ramadhan Kelantan', imageUrl: 'https://web14.bernama.com/storage/photos/0e01c260a4e479fdfaf1aa55fa858252605c724f97342' },
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
