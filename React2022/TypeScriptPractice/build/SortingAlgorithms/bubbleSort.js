"use strict";
// BubbleSort 
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j > i; j--) {
            if (array[i] > array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}
function runTests() {
    let testOne = [3, 1, 10, 2, 13, 8000, 68];
    let original = testOne.map(x => x);
    let sorted = bubbleSort(testOne);
    validate(sorted, original);
}
function main() {
    const start = performance.now();
    runTests();
    const duration = (performance.now() - start) / 1000;
    console.log(`----FINISHED: ${duration.toFixed(4)}----`);
}
main();
// ------------------------------------------------------------------------------------- HELPER METHODS -------------------------------------------------------------------------------------
const delay = (ms) => new Promise(res => setTimeout(res, ms));
function isSorted(nums) {
    let sorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}
function swap(array, idxOne, idxTwo) {
    let temp = array[idxOne];
    array[idxOne] = array[idxTwo];
    array[idxTwo] = temp;
}
function validate(arr, original) {
    let passed = isSorted(arr);
    if (passed) {
        console.log(`****PASSED*****: O[${original}] > S[${arr}] `);
    }
    else {
        console.log(`****FAILED*****: O[${original}] >  S[${arr}]`);
    }
}
