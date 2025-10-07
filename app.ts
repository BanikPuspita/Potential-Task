// Task -1 : Input numbers in array, calculate sum & average

function calculateSumAndAverage(numbers: number[]):{
    sum: number;
    average: number
}{
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return {sum, average}
}

const numbers: number[] = [10, 15, 20, 25, 30, 50];
const result = calculateSumAndAverage(numbers);

console.log("Input numbers:", numbers)
console.log("Sum:", result.sum)
console.log("Average:", result.average.toFixed(2))








