function findMinMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { min: undefined, max: undefined };
    }

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return { min, max };
}

// Test cases
console.log(findMinMax([1, 5, 3, 4, 5]));
console.log(findMinMax([-1, -2, -6, -4, -5]));
console.log(findMinMax([5, 2, 9, 10, 7, 3]));