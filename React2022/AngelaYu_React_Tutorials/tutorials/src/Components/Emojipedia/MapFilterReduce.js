var numbers = [3, 56, 2, 48, 5]; 

// Map - Create a new array by altering all elements with the method 
function double(x) {
    return x * 2; 
}
let mappedValues = numbers.map(double); // [6,112,4,96,10]

// Filter - Create a new array keeping only items that are True 
function valueIsEven(x) {
    return num > 10; 
}
let filteredValues = numbers.filter(valueIsEven); // [56,48]

// Reduce - Accumulate a value by doing something to each item in the array 
function addAllNumbers(acc, currentNumber){
    return acc + currentNumber;
}
let reducedArray = numbers.reduce(addAllNumbers);

// Find - find the first element that matches from an array 
let value = numbers.find(function(num){
    num > 10; 
})

// FindIndex - find the index of the first item that matches 
let valueIndex = numbers.findIndex(function(num){
    num > 10; 
})