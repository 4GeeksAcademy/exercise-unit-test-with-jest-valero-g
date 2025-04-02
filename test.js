test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One Dollar should be 146.261 Yen", function() {
    // Import the function from app.js
    const {fromDollarToYen} = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(1);

    const expected = (1 / 1.07)*156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})


test("1000Yen should be 5.559 Pounds", function() {
    // Import the function from app.js
    const {fromYenToPound} = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(1000);

    const expected = (1000 / 156.5)*0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(5.559105431309905); 
})

test("Adds 14+9 to equals 23", function (){
    const {sum} =require ("./app.js");
    expect(sum(14,9)).toBe(23);
})