$(".submit").click(function () {
    var city = $('.city').val()
    var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=4364ad2670d22d0c87ad4c754854728e";
    console.log(uri);
    $.get(uri, onres);
});

function onres(response) {
    console.log(response)
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description);
}