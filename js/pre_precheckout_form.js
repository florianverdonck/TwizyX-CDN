$(document).ready(function () {
    $("#order-checkout-form").on("submit", function (e) {
        console.log("submitted");
        $("#lead_submit").addClass("disabled");
        $("#lead_submit").prop("value", "Chargement en cours...");
        $(".loading-before-checkout").removeClass("d-none");
    });

    let floatingArrow = '<div><i class="fas fa-arrow-down fa-3x floating mt-3"></i></div>';

    $(".pricingWrapper").after(floatingArrow);
});