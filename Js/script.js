document.addEventListener('DOMContentLoaded', function(){
    $("#navbar").load("/html/nav.html", function() {
        var currentPageUrl = window.location.href;
        $('.nav a').each(function() {
            if ($(this).prop('href') === currentPageUrl) {
                    $(this).addClass('currentpage');
                    $(this).parents('li').addClass('currentpage');
            }
        });
        console.log(currentPageUrl);
    });
    $("#myfoot").load("/html/footer.html");
});