function validAnagram(str1, str2) {
    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Create frequency counters for both strings
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // Populate frequencyCounter1 with str1 characters
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    // Populate frequencyCounter2 with str2 characters
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    // Compare frequency counters
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}
