// BubbleSort 
function bubbleSort(array: number[]): number[] {
    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = array.length - 1; j > i; j--) {
            if (array[i] > array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

function runTests() {
    let testOne: number[] = [3, 1, 10, 2, 13, 8000, 68];
    let original = testOne.map(x => x);
    let sorted: number[] = bubbleSort(testOne);
    validate(sorted, original);
}

function main() {
    const start: number = performance.now();
    runTests();
    const duration: number = (performance.now() - start) / 1000;
    console.log(`----FINISHED: ${duration.toFixed(4)}----`);
}
main();


// ------------------------------------------------------------------------------------- HELPER METHODS -------------------------------------------------------------------------------------
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
function isSorted(nums: number[]): boolean {
    let sorted: boolean = true;
    for (let i: number = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

function swap(array: number[], idxOne: number, idxTwo: number): void {
    let temp: number = array[idxOne];
    array[idxOne] = array[idxTwo];
    array[idxTwo] = temp;
}

function validate(arr: number[], original: number[]): void {
    let passed: boolean = isSorted(arr);
    if (passed) {
        console.log(`****PASSED*****: O[${original}] > S[${arr}] `);
    } else {
        console.log(`****FAILED*****: O[${original}] >  S[${arr}]`);
    }
}