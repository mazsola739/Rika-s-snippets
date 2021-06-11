/*7. average

This snippet returns the average of two or more numerical values.*/


const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

//average(...[1, 2, 3]); // 2
//average(1, 2, 3); // 2
