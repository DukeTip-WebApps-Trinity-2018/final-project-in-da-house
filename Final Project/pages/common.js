$(document).ready(function(){
    $('.nav-item').hover(hoverNav, unHoverNav);
    });
function hoverNav(){
    $('nav-item').css("color", "orange");
    console.log("hoverfooter");
}
