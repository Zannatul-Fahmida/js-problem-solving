function findIntegers(arr) {
    const onlyInt = arr.filter(ele => typeof ele === 'number'); //check the type of array element is number or not
    console.log(onlyInt);
}
const filter = findIntegers(['we', 2, 3, 6, 'de', 'pq']);