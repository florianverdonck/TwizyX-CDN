const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let modelInPath = params.model;

if (modelInPath) {
    localStorage.setItem("model", modelInPath);
}

let selectedModel = localStorage.getItem("model");
if (!selectedModel) selectedModel = "T45";

selectedModel = selectedModel.toUpperCase();

let modelName = "";
switch (selectedModel) {
    case "T80":
        selectedModel = "T80";
        modelName = "Twizy 80";
        break;
    default:
        selectedModel = "T45";
        modelName = "Twizy 45";
        break;
}

let vehiclePerformances = {
    "PRE2016": {
        "T45": {
            "speed": {
                "original": 45,
                "tuned": 83
            },
            "torque": {
                "original": 32,
                "tuned": 50
            }
        },
        "T80": {
            "speed": {
                "original": 83,
                "tuned": 110
            },
            "torque": {
                "original": 57,
                "tuned": 90
            }
        }
    },
    "POST2016": {
        "T45": {
            "speed": {
                "original": 45,
                "tuned": 83
            },
            "torque": {
                "original": 32,
                "tuned": 100
            }
        },
        "T80": {
            "speed": {
                "original": 83,
                "tuned": 110
            },
            "torque": {
                "original": 57,
                "tuned": 100
            }
        }
    },
}

let currentPage = window.location.pathname;
let twizyYearName = "";

console.log(currentPage)

let perfs = undefined;
switch (currentPage) {
    case "/pre-2016":
        perfs = vehiclePerformances["PRE2016"][selectedModel];
        twizyYearName = " d'avant 2016";
        break;
    case "/post-2016":
        perfs = vehiclePerformances["POST2016"][selectedModel];
        twizyYearName = " d'après 2016";
        break;
    default:
        perfs = vehiclePerformances["POST2016"][selectedModel];
        twizyYearName = " d'après 2016";
        break;
}

replaceDynamicTags();

function replaceDynamicTags() {

    /****************************************/
    /*  Replacing all dynamic tags in page  */
    /****************************************/

    $(".model-selected-name").each(function() {
        $(this).text(modelName);    
    });

    $(".year-selected-name").each(function() {
        $(this).text(twizyYearName);    
    });

    /**********************************/
    /*  Replacing performance values  */
    /**********************************/

    $("#original_speed").text(perfs.speed.original);
    $("#tuned_speed").text(perfs.speed.tuned);

    $("#original_torque").text(perfs.torque.original);
    $("#tuned_torque").text(perfs.torque.tuned);

    // Only start counters after we replaced performance values

    //jQuery document ready
    $(document).ready(function() {
        startCounters();
    });
}