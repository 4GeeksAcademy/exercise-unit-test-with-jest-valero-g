let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum= (a,b) =>{
    return a+b;
}

function fromDollarToYen(quantity){
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    return (quantity/oneEuroIs.USD)* oneEuroIs.JPY;
}

function fromEuroToDollar(quantity){
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    return quantity*oneEuroIs.USD;
}

function fromYenToPound(quantity){
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    return (quantity /oneEuroIs.JPY)*oneEuroIs.GBP;
}



module.exports={sum, fromDollarToYen,fromEuroToDollar, fromYenToPound};

