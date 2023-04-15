// Adding click handlers to year buttons

let selectYearButtons = document.querySelectorAll(".select_year");

for (selectYearButton of selectYearButtons) {
  selectYearButton.addEventListener('click', function() {
    vehicleYearSelected(this);
  });
}

// Defining click handler when year is selected

function vehicleYearSelected(e) {
    let selectedModelYear = e.getAttribute("data-twizy-year");
    storeVehicleDetail("year", selectedModelYear);
    showTwizyModels();
    autoScrollTo("model_selector");
    
    for (selectYearButton of selectYearButtons) {
        selectYearButton.classList.remove("selected");
    }
      
    e.classList.add("selected");

    showProductPageButton();
}


function showProductPageButton() {

    let btnPre2016_T45 = document.getElementById("btn-product-pre2016-T45");
    let btnPre2016_T80 = document.getElementById("btn-product-pre2016-T80");
    let btnPost2016_T45 = document.getElementById("btn-product-post2016-T45");
    let btnPost2016_T80 = document.getElementById("btn-product-post2016-T80");
    
    let selectedModelYear = getVehicleDetail("year");
    let selectedModel = getVehicleDetail("model");

    if (!selectModelButtons || !selectedModel) return;

    btnPre2016_T45.classList.add("hidden");
    btnPre2016_T80.classList.add("hidden");
    btnPost2016_T45.classList.add("hidden");
    btnPost2016_T80.classList.add("hidden");

    console.log("Showing product link for : " + selectedModelYear + "_" + selectedModel);

    switch (selectedModelYear + "_" + selectedModel) {
        
        case "PRE2016_T45":
            btnPre2016_T45.classList.remove("hidden");
            break;

        case "PRE2016_T80":
            btnPre2016_T80.classList.remove("hidden");
            break;

        case "POST2016_T45":
            btnPost2016_T45.classList.remove("hidden");
            break;

        case "POST2016_T80":
            btnPost2016_T80.classList.remove("hidden");
            break;
    }
}

function showTwizyModels() {
    console.log("show models");
    document.getElementById("model_selector").classList.remove('hidden');
}

let selectModelButtons = document.querySelectorAll('.select_model');

for (selectModelButton of selectModelButtons) {
  selectModelButton.addEventListener('click', function() {
    vehicleModelSelected(this);
  });
}

function vehicleModelSelected(e) {
    let selectedModelCode = e.getAttribute("data-twizy-model");
    
    storeVehicleDetail("model", selectedModelCode)
    
    document.getElementById("product_selector").classList.remove('hidden');

    autoScrollTo("product_selector");

    for (selectModelButton of selectModelButtons) {
        selectModelButton.classList.remove("selected");
    }
      
    e.classList.add("selected");
    
    showProductPageButton();

}