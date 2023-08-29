//Program1
//  1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// function sumCalculator(n){
//     var sum=0;
//     for(let i=1;i<=n;i++){
//         var evenNumber=2*i;
//         sum+=evenNumber;
//     }
//     return sum;
// }
// console.log(sumCalculator(3));
//Program2
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenArray = [];
for (var i = 0; i <= array1.length; i++) {
    if (array1[i] % 2 == 0) {
        evenArray.push(array1[i]);
    }
}
console.log(evenArray);
