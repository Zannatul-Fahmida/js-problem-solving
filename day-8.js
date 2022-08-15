function findIndex(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() === ele.toLowerCase()){ 
            console.log(i)
        }
    }
}
const input = findIndex(["black", "Blue", "Red", "green"], "Green");
const input2 = findIndex(["s", "t", "a", "c"], "C");
const input3 = findIndex(["apple", "Orange", "Banana", "mango"], "banana");