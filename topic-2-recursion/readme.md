# Recursion

Рекурсия - вычислительный процесс, направленный на решение определенной задачи таким образом, что само решение использует этот же процесс, решающий аналогичную подзадачу.

Обычно, в программировании под рекурсией понимают такую реализацию, в которой подпрограмма использует в своем теле вызов самой себя. Такие вызовы называют рекурсивными.

### Где используем рекурсию

JSON.parse / JSON.stringify
document.getElementById and DOM traversal algorithms
Object traversal
Very common with more complex algorithms
It's sometimes a cleaner alternative to iteration

2 essential parts of a recursive function:
1. Base Case
2. Different Input

Base Case - a condition that evaluates the current input to stop the recursion from continuing.
Recursive Step - one or more calls to the recursive function to bring the input closer to the base case.

```python
def countdown(value):
  if value <= 0:   #base case  
    print("done")
  else:
    print(value)
    countdown(value-1)  #recursive step 
```

```js
function countDown(num){
    if(num <= 0) { // base case
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num); // recursive step
}
```

```js
function sumRange(num){
   if(num === 1) return 1; // base case 
   return num + sumRange(num-1); // recursive call
}
```

### factorial case

Here are the cases

```js
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
```


### Problem Set

1. Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
```js
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, n){
}
```
2. Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

```js
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(){
   
}
```
3. Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
```js
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
```
4. `recursiveRange` - Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
```js
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(){
   // comment
}
```

5. Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

```js
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(){
  // add whatever parameters you deem necessary - good luck!  
}
```