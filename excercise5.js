//For understanding more about arrays, try creating an array that has 5 elements.
const numbers= [1, 2, 3, 4, 5];

//Replace the value of the element at position 1 and 4.
numbers[0]=10;
numbers[3]=15
console.log(numbers);


//Add a new element to the beginning of the array
numbers.unshift(9);
console.log(numbers);

//Remove the element at the end of the array
numbers.shift();
console.log(numbers);

//Print the array to the console.
for(let i = 0; i<numbers.length; i++) {
    console.log(numbers[i]);
}