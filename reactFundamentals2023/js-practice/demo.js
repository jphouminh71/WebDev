var x = 10;
let y = 9;
const person = {
  firstName: "Jonathan",
  lastName: "Phouminh",
};

// unpacking values
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

const arr = [1, 2, 3, 4];
const bool = true;
const int = 1;
const float = 1.0;

console.log(person.firstName);

// String length
const firstNameLength = person.firstName.length;
console.log(firstNameLength);

// String interopulation
console.log(`Hi my name is ${person.firstName}`);

const max = 10;
let curr = 0;
while (curr < max) {
  console.log(curr);
  curr++;
}
