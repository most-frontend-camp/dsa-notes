# Functions

1. Spread arguments and rest parameters
2. Self-Invoking Functions
3. Scope
4. Callback
5. Recursion

### Rest and spread

Although both operators in JavaScript have identical syntax, i.e., three dots (…), these operators are not the same and perform different tasks.

The main difference between the two operators lies in their names. The spread operator in JavaScript expands values in arrays and strings into individual elements whereas, the rest operator, puts the values of user-specified data into a JavaScript array.

https://www.scaler.com/topics/spread-and-rest-operator-in-javascript/

### Scope
Here is an example of scope, namely function.
```js
let bird = 'Golden Sheep';

function birdWatch(){
    let bird = 'Orange Fox';
    console.log(bird);
}

birdWatch(); // Orange Fox
console.log(bird); // Golden Sheep
```

`birdWath` will print `Orange Fox` because it has access to nearest scope.