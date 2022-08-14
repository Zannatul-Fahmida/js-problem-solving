function evenNum(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
const myNum = 12;
const isMyNum = evenNum(myNum);