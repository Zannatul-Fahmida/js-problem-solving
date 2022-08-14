function newArray(nums) {
    const newArr = [];
    newArr.push(nums[0], nums[nums.length-1]);
    return newArr;
}
console.log(newArray([3, 8, 5, 18, 20]))
console.log(newArray(["apple", "banana", "orange", true, false]))
console.log(newArray([undefined, 7, "7", "undefined", null, 7]))