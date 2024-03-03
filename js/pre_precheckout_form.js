$(document).ready(function () {

    let model = getVehicleDetail("model");
    let year = getVehicleDetail("year");
    let price = getPrice(model, year);

    $("#lead_submit").on("click", function (e) {
        e.preventDefault(); // Prevent form submission

        // Check which button was clicked and update hidden field
        /*
        if (this.id === "pay_split") {
            $("#lead_pay_split").prop("value", true);
        }
        */

        console.log("submitted");
        $("#" + this.id).addClass("disabled");
        $("#" + this.id).prop("value", "Chargement en cours...");
        $(".loading-before-checkout").removeClass("d-none");
        $("#lead_model").prop("value", model);
        $("#lead_language").prop("value", Weglot.getCurrentLang());

        // Submit the form manually
        $("#order-checkout-form").submit();
    });

    $("#order-checkout-form").on("submit", function (e) {

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