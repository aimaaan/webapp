$(document).ready(function(){
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
            const todayData = data.data[new Date().getDate()-1];
            const tomorrowData = data.data[new Date().getDate()];
            document.getElementById('todayd').innerHTML=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();
            document.getElementById('tomorrowd').innerHTML=(new Date().getDate()+1)+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();
            document.getElementById('Tfjr').innerHTML=todayData.timings.Fajr.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Tdhuhr').innerHTML=todayData.timings.Dhuhr.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Tasr').innerHTML=todayData.timings.Asr.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Tmag').innerHTML=todayData.timings.Maghrib.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Tisha').innerHTML=todayData.timings.Isha.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Nfjr').innerHTML=tomorrowData.timings.Fajr.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Ndhuhr').innerHTML=tomorrowData.timings.Dhuhr.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Nasr').innerHTML=tomorrowData.timings.Asr.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Nmag').innerHTML=tomorrowData.timings.Maghrib.replace(/\s\(\+\d+\)/, '');
            document.getElementById('Nisha').innerHTML=tomorrowData.timings.Isha.replace(/\s\(\+\d+\)/, '');

        })
        .catch(error=>{
            console.log("Error details: " + error)
        })
    }
    function fail(){
                console.log("location is not supported by the browser");
            }
});