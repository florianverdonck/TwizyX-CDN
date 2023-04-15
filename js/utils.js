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