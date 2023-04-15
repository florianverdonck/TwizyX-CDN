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

function storeVehicleDetail(infoType, infoValue) {
    console.log(`Storing ${infoType} = ${infoValue}`)
    localStorage.setItem(infoType, infoValue);
}

function getVehicleDetail(infoType) {
    return localStorage.getItem(infoType);
}

function getPrice(model, year) {
    switch (year + "_" + model) {
        case "PRE2016_T45":
            return 499; 
        case "PRE2016_T80":
            return 499; 
        case "POST2016_T45":
            return 1199; 
        case "POST2016_T80":
            return 1199; 
        default:
            return 0;
    }
}