$(document).ready(function() {
    var properties = [
            { location: 'Putrajaya', description: 'Bazzar Ramadhan Masjid Besi',  imageUrl: 'https://assets.hmetro.com.my/images/articles/2016_PJ060616FH004_1585627422.jpg' },
            { location: 'Kuala Lumpur', description: 'Bazzar Ramadhan Kuala Lumpur', imageUrl: 'https://live.staticflickr.com/7111/7652632638_59433eb21b_b.jpg' },
            { location: 'Johor', description: 'Bazzar Ramadhan Johor', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
            { location: 'Selangor', description: 'Bazzar Ramadhan Selangor', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
            { location: 'Negeri Sembilan', description: 'Bazzar Ramadhan Negeri Sembilan', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
            { location: 'Selangor', description: 'Bazzar Ramadhan Danau kota', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
            { location: 'Kelantan', description: 'Bazzar Ramadhan Kelantan', imageUrl: 'https://www.johorkini.my/wp-content/uploads/bfi_thumb/bazar-ramadhan-p4egiucvgqace6prxplp24n689lf3bxhb7qrebte68.jpg' },
    ];

    $('#search').on('keyup', function() {
        var location = $(this).val();

        if (location !== '') {
            var filteredProperties = properties.filter(function(property) {
                return property.location.toLowerCase().indexOf(location.toLowerCase()) > -1;
            });

            $('#properties').empty();

            filteredProperties.forEach(function(property) {
                var propertyCard = `
                    <div class="property-card">
                        <img src="${property.imageUrl}" alt="${property.description}">
                        <h2>${property.location}</h2>
                        <p>${property.description}</p>
                    </div>
                `;

                $('#properties').append(propertyCard);
            });
        }
    });
});
