const functionArgs = [1,2,3,4];

function multiplyNumbers (a, b, c, d) {
    return a*b*c*d;
}

console.log(multiplyNumbers(...functionArgs));

function testRest(...values) {
    return values;
}

console.log(testRest("Eshaan", "Rahul"))
