"use strict"

//1. CREATE AN ARRAY OF OBJECTS FROM THE TABLE;

const workersDetails = [{
          firstName: "Vanessa",
          lastName: "Rogers",
          Gender: "Female",
          Age: 19,
          Salary: 60193
     },
     {
          firstName: "Charlotte",
          lastName: "Hunt",
          Gender: "Female",
          Age: 24,
          Salary: 92383
     },
     {
          firstName: "Marcus",
          lastName: "Foster",
          Gender: "Male",
          Age: 21,
          Salary: 65760
     },
     {
          firstName: "Myra",
          lastName: "Brooks",
          Gender: "Female",
          Age: 21,
          Salary: 174036
     },
     {
          firstName: "Caroline",
          lastName: "Armstrong",
          Gender: "Female",
          Age: 29,
          Salary: 149879
     },
     {
          firstName: "Belinda",
          lastName: "Carroll",
          Gender: "Female",
          Age: 19,
          Salary: 188935
     },
     {
          firstName: "Olivia",
          lastName: "Armstrong",
          Gender: "Female",
          Age: 26,
          Salary: 34782
     },
     {
          firstName: "April",
          lastName: "Cooper",
          Gender: "Female",
          Age: 20,
          Salary: 68263
     },
     {
          firstName: "Edith",
          lastName: "Harrison",
          Gender: "Female",
          Age: 23,
          Salary: 54709
     },
     {
          firstName: "Vivian",
          lastName: "Henderson",
          Gender: "Female",
          Age: 20,
          Salary: 155709
     },
     {
          firstName: "Ashton",
          lastName: "Martin",
          Gender: "Male",
          Age: 27,
          Salary: 166647
     },
     {
          firstName: "Gianna",
          lastName: "Moore",
          Gender: "Female",
          Age: 23,
          Salary: 191619
     },
     {
          firstName: "Camila",
          lastName: "Allen",
          Gender: "Female",
          Age: 23,
          Salary: 85567
     },
     {
          firstName: "Gianna",
          lastName: "Morrison",
          Gender: "Female",
          Age: 28,
          Salary: 191509
     },
     {
          firstName: "Paul",
          lastName: "Cooper",
          Gender: "Male",
          Age: 28,
          Salary: 39471
     },
     {
          firstName: "Tara",
          lastName: "Mason",
          Gender: "Female",
          Age: 19,
          Salary: 189780
     },
     {
          firstName: "Aida",
          lastName: "Tucker",
          Gender: "Female",
          Age: 21,
          Salary: 143187
     },
     {
          firstName: "Richard",
          lastName: "Cameron",
          Gender: "Male",
          Age: 21,
          Salary: 116644
     },
     {
          firstName: "Amy",
          lastName: "Stewart",
          Gender: "Female",
          Age: 29,
          Salary: 126961
     },
     {
          firstName: "Eleanor",
          lastName: "Thompson",
          Gender: "Female",
          Age: 22,
          Salary: 159003
     },
     {
          firstName: "Alberta",
          lastName: "Edwards",
          Gender: "Female",
          Age: 21,
          Salary: 105648
     },
     {
          firstName: "Gianna",
          lastName: "Evans",
          Gender: "Female",
          Age: 27,
          Salary: 183805
     },
     {
          firstName: "Florrie",
          lastName: "Kelley",
          Gender: "Female",
          Age: 24,
          Salary: 180568
     },
     {
          firstName: "Miranda",
          lastName: "Harris",
          Gender: "Female",
          Age: 19,
          Salary: 185753
     },
     {
          firstName: "Henry",
          lastName: "Davis",
          Gender: "Male",
          Age: 18,
          Salary: 83804
     },
     {
          firstName: "Kirsten",
          lastName: "Barnes",
          Gender: "Female",
          Age: 26,
          Salary: 161833
     },
     {
          firstName: "Jack",
          lastName: "Chapman",
          Gender: "Male",
          Age: 19,
          Salary: 41007
     },
     {
          firstName: "Myra",
          lastName: "Kelly",
          Gender: "Female",
          Age: 27,
          Salary: 118346
     },
     {
          firstName: "Emma",
          lastName: "Evans",
          Gender: "Female",
          Age: 23,
          Salary: 126125
     },
     {
          firstName: "Blake",
          lastName: "Evans",
          Gender: "Male",
          Age: 24,
          Salary: 69702
     },
     {
          firstName: "Aldus",
          lastName: "Armstrong",
          Gender: "Male",
          Age: 26,
          Salary: 132491
     },
     {
          firstName: "Adelaide",
          lastName: "Martin",
          Gender: "Female",
          Age: 20,
          Salary: 175263
     },
     {
          firstName: "Victoria",
          lastName: "Elliott",
          Gender: "Female",
          Age: 21,
          Salary: 111645
     },
     {
          firstName: "Nicole",
          lastName: "Harrison",
          Gender: "Female",
          Age: 22,
          Salary: 54624
     },
     {
          firstName: "Edwin",
          lastName: "Hamilton",
          Gender: "Male",
          Age: 18,
          Salary: 152586
     },
     {
          firstName: "Jessica",
          lastName: "Robinson",
          Gender: "Female",
          Age: 29,
          Salary: 85446
     },
     {
          firstName: "Sofia",
          lastName: "Turner",
          Gender: "Female",
          Age: 20,
          Salary: 131564
     },
     {
          firstName: "Cadie",
          lastName: "Higgins",
          Gender: "Female",
          Age: 21,
          Salary: 138663
     },
     {
          firstName: "Jessica",
          lastName: "Turner",
          Gender: "Female",
          Age: 24,
          Salary: 91319
     },
     {
          firstName: "Walter",
          lastName: "Hamilton",
          Gender: "Male",
          Age: 25,
          Salary: 117408
     },
     {
          firstName: "Alexander",
          lastName: "Farrell",
          Gender: "Male",
          Age: 26,
          Salary: 65878
     },
     {
          firstName: "Justin",
          lastName: "Howard",
          Gender: "Male",
          Age: 21,
          Salary: 165575
     },
     {
          firstName: "Chelsea",
          lastName: "Holmes",
          Gender: "Female",
          Age: 21,
          Salary: 32690
     },
     {
          firstName: "Alberta",
          lastName: "Wilson",
          Gender: "Female",
          Age: 22,
          Salary: 143459
     },
     {
          firstName: "Miller",
          lastName: "Murphy",
          Gender: "Male",
          Age: 25,
          Salary: 163776
     },
     {
          firstName: "Adrianna",
          lastName: "Hawkins",
          Gender: "Female",
          Age: 29,
          Salary: 64412
     },
     {
          firstName: "Dominik",
          lastName: "Reed",
          Gender: "Male",
          Age: 23,
          Salary: 42643
     },
     {
          firstName: "Gianna",
          lastName: "Craig",
          Gender: "Female",
          Age: 18,
          Salary: 141944
     },
     {
          firstName: "Alissa",
          lastName: "Cameron",
          Gender: "Female",
          Age: 25,
          Salary: 101581
     },
     {
          firstName: "Aldus",
          lastName: "Adams",
          Gender: "Male",
          Age: 28,
          Salary: 132894
     }
]
// ASSIGNMENT 1
// Print to the console the firstname and lastname of the all workers using forEach()
workersDetails.forEach(details => {
     console.log(`${details.firstName} ${details.lastName}`);

});
// Print to the console the total salaries of all workers using reduce()
const totalSalary = workersDetails.reduce((acc, obj) => {
     return acc + obj.Salary;
}, 0);
console.log(totalSalary);
// Print to the console the average age of all workers using reduce()
const averageAge = workersDetails.reduce((acc, obj) => {
     return (acc + obj.Age) / workersDetails.length;

}, 0);
console.log(averageAge);
// Print to the console the array of workers that are above the age of 30 using filter()
const above30 = workersDetails.filter(details => details.Age >= 30);
console.log(above30);
// The income of the company was trippled so the management decided to double the salaries of each workers. You are to print to the console the new salaries of the workers using map() and forEach() (use the chaining method).
workersDetails.map(detail => detail.Salary * 2).forEach(detail => console.log(detail));

// Assignment 2
//Create a function that takes in an array of numbers as a parameter and returns the first and last element of the array. Use arrow function;
const arrNumber = (arr) => console.log(`${arr[0]}  ${arr[arr.length-1]}`);
arrNumber([1, 2, 3, 4, 5, 6]);

// Create a function that accepts an object as a parameter and returns a sentence using the object values.
let  workerDetail = {
     firstName: 'Vanessa',
     secondName: 'Rogers',
     gender: 'Female',
     age: 19,
     salary: 60193
};
const objfunc = (obj) => console.log(`Your name is ${workerDetail.firstName} ${workerDetail.secondName},you're a ${workerDetail.gender} and your current salary is ${workerDetail.salary}`);

objfunc(workerDetail);


// In one line, create a function that takes in two parameters, name and score. The function should return the name and score. E.g Hello, Teni, your score is 500

const helloScore = (name, score) => `hello,${name} your score is ${score}`;
console.log(helloScore('uche', 500));