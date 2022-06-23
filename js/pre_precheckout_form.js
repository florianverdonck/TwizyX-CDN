$("#order-checkout-form").on("submit", function (e) {
    console.log("submitted");
    $("#lead_submit").addClass("disabled");
    $("#lead_submit").prop("value", "Chargement en cours...");
    $(".loading-before-checkout").removeClass("d-none");
    //prevent default behaviour
    e.preventDefault();
});