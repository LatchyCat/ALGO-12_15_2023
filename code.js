/*
Challenge: Create Pascal's Triangle see: https://www.mathsisfun.com/pascals-triangle.html

Your task is to write a JavaScript function that takes an integer n as input and returns an array of arrays
that represents the first n rows of Pascal's triangle.

Pascal's triangle is a triangular array of numbers in which the first and last number in each row is 1,
and each remaining number is the sum of the two numbers above it in the previous row.

For example, if n is 5, the function should return the following array:


[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]

]

hint: How many digits are in row n?

Each array on index [0] = 1
Each array with more than 1 number will have its last index = 1

[First index = 1]
[Last index = 1]


*/


function generatePascalsTriangle(n) {
    //Your code here
    //Edge case 1 & 2
    if (n === 1) return [[1]]
    if (n < 1) return [[]]

    const main = [[1]];

        for (let i = 1; i < n; i++) {

            let pre = main[i - 1];
            const curr = [];

            curr.push(1)

            for (let j = 1; j < pre.length; j++) {
                curr[j] = pre[j] + pre[j - 1];
            }

            curr.push(1)
            main.push(curr)
        }
    return main
}


console.log(generatePascalsTriangle(1));
// => [[1]]

console.log(generatePascalsTriangle(2));
// => [[1], [1, 1]]

console.log(generatePascalsTriangle(5));
// => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

console.log(generatePascalsTriangle(6));
// => [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]
