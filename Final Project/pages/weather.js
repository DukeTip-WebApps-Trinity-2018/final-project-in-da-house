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
    $('.reccomendation').html("It's freezing, get a Cappuccino and a Chicken Noodle Soup" );
    $('#reccomendation').html('<img id="image" src="https://geaefitness.trihealth.com/uploadedImages/geaefitnesstrihealthcom/content/fit-tips-and-wellness-tools/recipes/spinach-chicken-noodle-soup.jpg" />');
}
if (response.main.temp <= 10 && response.main.temp <= 30){
    $('.reccomendation').html("It's cold, get a Spicy Tortilla Soup and an Offogato");
    $('.reccomendation').html('img id="image" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/5/1/FNM_110111-WN-Desserts-004_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371600520701.jpeg"/>');
}
if (response.main.temp > 30 && response.main.temp <= 50){
    $('.reccomendation').html("It's chilly, get a Caramel Mocha and a Hamburger");
    $('#reccomendation').html('<img id="image" src="https://img-aws.ehowcdn.com/300x200/photos.demandstudios.com/getty/article/178/140/78364755_XS.jpg" />');
}
if (response.main.temp > 50 && response.main.temp <= 60){
    $('.reccomendation').html("It's nice, get a Fanta and a Caesar Salad");
    $('#reccomendation').html('<img id="image" src="https://cmt.azureedge.net/media/a-caesar-salad-to-rule-them-all-20180123165143997861b2ne1q.jpg" />');
}
if (response.main.temp > 60 && response.main.temp <= 70){
    $('.reccomendation').html("It's refreshing, get a Latte and a Clam Chowder Soup");
    $('#reccomendation').html('<img id="image" src="https://www.yokesfreshmarkets.com/sites/default/files/styles/flavortrail_featured/public/asset/image/clam_chowder_0.jpg?itok=b5bXghTk" />');
}
if (response.main.temp > 70 && response.main.temp <= 80){
    $('.reccomendation').html("It's pleasant, get a Root Beer and a Tomato Orzo Salad");
     $('#reccomendation').html('<img id="image" src="https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/300x200/greek-orzo-and-grilled-shrimp-salad-with-mustard_759.jpg" />');
}
if (response.main.temp > 80 && response.main.temp <= 90){
    $('.reccomendation').html("It's warm, get a Sprite and PoBoy");
    $('#reccomendation').html('<img id="image" src="https://static1.squarespace.com/static/53e90ea1e4b0cd70f5b3e11d/59e79303914e6b43ba748b0c/59e79303edaed8f67095b23d/1508348681256/202676+GumboBros_ShrimpPoBoy.jpg?format=300w" />');
}
if (response.main.temp > 90 && response.main.temp <= 100){
    $('.reccomendation').html("It's hot, get a water and a Double Bacon Cheeseburger");
    $('#reccomendation').html('<img id="image" src="http://b985.fm/files/2014/11/Burger-Donut-300x200.jpg" />');
}
if (response.main.temp > 100){
    $('.reccomendation').html("It's burning, get a Ginger Ale and some Chicken Tenders");
    $('#reccomendation').html('<img id="image" src="https://s.doctoroz.com/sites/default/files/media/image_thumb/chicken_tenders.jpg" />');
}
}