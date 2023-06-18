$(document).ready(function() {
    $("#navbar").load("nav.html", function() {
        var currentPageUrl = window.location.href;
        $('.nav a').each(function() {
            if ($(this).prop('href') === currentPageUrl) {
                    $(this).addClass('currentpage');
                    $(this).parents('li').addClass('currentpage');
            }
        });
    });
    navigator.geolocation.getCurrentPosition(success,fail);
    function success(position){
        let myyear=new Date().getFullYear();
        let mymonth=new Date().getMonth()+1; 
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        var myurl="https://api.aladhan.com/v1/calendar/"+myyear+"/"+mymonth+"?latitude="+lat+"&longitude="+long+"&method=2&tune=0,0,0,0,0,0,0,0,0&school=0&offset=0`";
        console.log(myurl);
        fetch(myurl).then(response=>{
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error("Request failed with status: " + response.status)
            }
        })
        .then(data=>{
            console.log(data);
        })
        .catch(error=>{
            console.log("Error details: " + error)
        })
    }
    function fail(){
                console.log("location is not supported by the browser");
            }
});