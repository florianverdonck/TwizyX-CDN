$(document).ready(function () {

    let model = getVehicleDetail("year");
    let year = getVehicleDetail("model");
    let price = getPrice(model, year);

    $("#order-checkout-form").on("submit", function (e) {
        console.log("submitted");
        $("#lead_submit").addClass("disabled");
        $("#lead_submit").prop("value", "Chargement en cours...");
        $(".loading-before-checkout").removeClass("d-none");
        $("#lead_model").prop("value", model);
        $("#lead_language").prop("value", Weglot.getCurrentLang());

        fbq('track', 'AddToCart', {
            value: price,
            currency: 'EUR',
            content_ids: [ `${year}_${model}` ],
            content_type: 'product'
        });

    });

    let floatingArrow = '<div><a href="#order-form"><i class="fas fa-arrow-down fa-3x floating mt-3"></i></a></div>';

    $(".pricingWrapper").after(floatingArrow);
});