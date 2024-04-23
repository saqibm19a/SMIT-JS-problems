function findMissingNumber(numbers) {
    numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== 1) {
            return numbers[i] + 1;
        }
    }
    return null;
}

// Test cases
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20]));
console.log(findMissingNumber([10, 11, 12, 13, 15]));