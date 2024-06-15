### Linear Search

* This function accepts an array and a value.
* Loop through the array and check if the current array element is equal to the value
* If it is, return the index at which the element is found
* If the value is never found, return -1

Suppose the array has n elements. 
Because you have to scan the entire array—in the worst case—the linear search algorithm has a time complexity of O(n).


### Linear Search Exercise
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. 
If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

Examples:

```javascript
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1
```
### Binary search
Binary Search is a searching algorithm for finding an element's position in a sorted array.

* Binary search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
* Binary search only works on sorted arrays!
* Divide and conquere approach is implemented

### Binary search pseudocode
1. Create a left pointer at the start of the array, and a right pointer at the end of the array
2. While the left pointer comes before the right pointer:
    * Create a pointer in the middle
    * If you find the value you want, return the index
    * If the value is too small, move the left pointer up
    * If the value is too large, move the right pointer down
3. If you never find the value, return -1

The time complexity of binary search is, therefore, O(logn). This is much more efficient than the linear time O(n), especially for large values of n.

For example, if the array has 1000 elements. 2^(10) = 1024. While the binary search algorithm will terminate in around 10 steps, linear search will take a thousand steps in the worst case.

### Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.


### Naive String Search
Suppose you want to count the number of times a smaller string appears in a longer string.
A straightforward approach involves checking pairs of characters individually.

Long string - `wowomgzomg`.
Short string - `omg`.

```
naiveSearch(long, short) // answer will be 2
```
