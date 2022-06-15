function startCounters() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function autoScrollTo(el) {
    var top = $("#" + el).offset().top - 100;
    $("html, body").animate({ scrollTop: top }, 500);
}