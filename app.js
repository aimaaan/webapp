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

    $('#search').on('keyup', function() {
        var location = $(this).val();

        if (location !== '') {
            var filteredProperties = properties.filter(function(property) {
                return property.location.toLowerCase().indexOf(location.toLowerCase()) > -1;
            });

            $('#properties').empty();

            filteredProperties.forEach(function(property) {
                var propertyCard = $(`
                    <div class="property-card">
                        <img src="${property.imageUrl}" alt="${property.description}">
                        <h2>${property.location}</h2>
                        <p>${property.description}</p>
                        <a href="review.html?location=${encodeURIComponent(property.location)}">Review</a>
                    </div>
                `);
                        
                propertyCard.click(function() {
                    window.location.href = 'details.html?location=' + encodeURIComponent(property.location);
                });
                
                $('#properties').append(propertyCard);
            });
        }
    });
});
