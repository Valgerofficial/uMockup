$(document).ready(function () {



	// Эффект паралакса багронуд

    $(document).on("mousemove", function (e) {
        var ax = -($(window).innerWidth() / 2 - e.clientX);
        var ay = -($(window).innerHeight() / 2 - e.clientY);
        var scale = Math.abs(ax / ($(window).innerWidth() / 2)) * Math.abs(ay / ($(window).innerHeight() / 2));
        scale = 1.1 + scale * 0.1;

        var transformEyeValue = "translateX(" + ax / 20 + "px) translateY(" + ay / 10 + "px) scale(" + (1 + scale * 0.1) + ')';
        $(".mask .inner").css({
            "transform": transformEyeValue,
            "-webkit-transform": transformEyeValue,
            "-moz-transform": transformEyeValue
        });


        var transformEyeBgValue = "translateX(" + ax / 40 + "px) translateY(" + ay / 20 + "px) scale(" + (1 + scale * 0.05) + ')';
        $(".mask .outer").css({
            "transform": transformEyeBgValue,
            "-webkit-transform": transformEyeBgValue,
            "-moz-transform": transformEyeBgValue
        });
    });


});