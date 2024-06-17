function sum(...nums) {
	return nums.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(1, -1)) // 0
console.log(sum(...[1, 2, 3])) // 6