$(".timesfont").click(function (changeToRoman) {
    console.log("timesnewroman");

});
$(".comicfont").click(function () {
    console.log("comicsans");
});
function changeToRoman(){
    $('html').css("font-family", "timesnewroman");
}