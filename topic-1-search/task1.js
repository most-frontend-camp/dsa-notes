function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) { // Found it!
        console.log(i);
      }
    }
    
    // Item not found in the array.
    return null;
  }

linearSearch([100], 200) // -1
linearSearch([10, 15, 20, 25, 30], 15) // 1