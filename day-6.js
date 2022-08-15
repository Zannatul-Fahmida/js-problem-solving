function reverseArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    return newArr;
}
const inputArray = reverseArray([2, 3, 4, 9, 8]);
console.log(inputArray);