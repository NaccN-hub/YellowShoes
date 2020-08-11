$(document).ready(function () {
    $("#catalogo").click(function () {
        $("#centro").load("catalogo.html");
    });
    $("#combos").click(function () {
        $("#centro").load("combos.html");
    });
    $("#aboutus").click(function () {
        $("#centro").load("aboutus.html");
    });
});