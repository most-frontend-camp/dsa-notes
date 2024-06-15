# Problem Solving 

### Goals

* Define what an algorithm is
* Devise a plan to solve algorithms
* Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

HOW DO YOU IMPROVE?
1. Devise a plan for solving problems
2. Master common problem solving patterns

PROBLEM SOLVING
1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

SOME PATTERNS...
* Frequency Counter
* Multiple Pointers
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* Many more!

### Problem 1 - Anagram
Write a function called same, which accepts two arrays. 
* The function should return true if every value in the array has it's corresponding value squared in the second array. 
* The frequency of values must be the same.
```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

### Problem 2 - Anagram
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```js
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

### Multiple pointer
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well


### Problem 3 - sumZero
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```