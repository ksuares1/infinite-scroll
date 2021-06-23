$(document).ready(function () {
var widgets=[];

$(".pins").on("click", function () {
    console.log("pins");
    for (var i = 0; i < widgets.length; i++) {
        var a = $("<button>");
        a.addClass("picture");
        a.attr("data-type", widgets[i]);
        a.text(widgets[i]);
        $(".pinterest-widgets").append(a);
    }
});

});

$(document).on("click", ".picture", function () {
    var type = $(this).attr("data-type");
    console.log(type);
    $("#widgets").empty();
    $(this).addClass("active");