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
    recommend(response);
}
function recommend(response){
if (response.main.temp < 10){
    $('.reccomendation').html("It's freezing, get a Cappuccino and a Chicken Noodle Soup");
}
if (response.main.temp <= 10 && response.main.temp <= 30){
    $('.reccomendation').html("It's cold, get a Spicy Tortilla Soup and an Offogato");
}
if (response.main.temp > 30 && response.main.temp <= 50){
    $('.reccomendation').html("It's chilly, get a Caramel Mocha and a Hamburger");
}
if (response.main.temp > 50 && response.main.temp <= 60){
    $('.reccomendation').html("It's nice, get a Fanta and a Caesar Salad");
}
if (response.main.temp > 60 && response.main.temp <= 70){
    $('.reccomendation').html("It's refreshing, get a Latte and a Clam Chowder Soup");
}
if (response.main.temp > 70 && response.main.temp <= 80){
    $('.reccomendation').html("It's pleasant, get a Root Beer and a Tomato Orzo Salad");
}
if (response.main.temp > 80 && response.main.temp <= 90){
    $('.reccomendation').html("It's warm, get a Sprite and PoBoy");
}
if (response.main.temp > 90 && response.main.temp <= 100){
    $('.reccomendation').html("It's hot, get a water and a Double Bacon Cheeseburger");
}
if (response.main.temp > 100){
    $('.reccomendation').html("It's burning, get a Ginger Ale and some Chicken Tenders");
}
}