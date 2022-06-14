let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1

console.log(array1[2]);

// print the last element in array1

console.log(array1[array1.length - 1]);

// add 16 and 3 to array1

array1.push(16, 3);
console.log(array1);

// sort the array, then print the 3rd element again
// did it change?

array1.sort();
console.log(array1);
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array

var myTodoList = [];

// add three todo items to the array using a built-in array method
function updateTodoList(todo) {
    return myTodoList.push(todo);
}

updateTodoList("Finish lab");
updateTodoList("Do research");
updateTodoList("Take quizzes");
console.log(myTodoList);

// remove the second item in the array

console.log(myTodoList.splice(1, 1));
console.log(myTodoList);

// create another array, yourTodoList, and add two todo items

var yourTodoList = ["Start OpenClass review", "Make LinkedIn post"];
console.log(yourTodoList);

// create another array, ourTodoList

var ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList

for (todo of myTodoList) {
    ourTodoList.push(todo);
}

for (todo of yourTodoList) {
    ourTodoList.push(todo);
}

console.log(ourTodoList);

// sort the following array from Z-A

ourTodoList.sort();
ourTodoList.reverse();
console.log(ourTodoList);

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

// function reverse(parameter) {
//     if (parameter === true) {
//         argumentReversed = false;
//         return argumentReversed;
//     } else if (parameter === false) {
//         argumentReversed = true;
//         return argumentReversed;
//     // } else if (typeof parameter === "number") {
//     //     var argumentReversed = "";
//     //     for (num in parameter) {
//     //         argumentReversed += num;
//     //     }
//     //     argumentReversed = argumentReversed.reverse();
//     //     return parseFloat(argumentReversed);
//     // } else if (typeof parameter === "string") {
//     //     for (char of parameter) {
//     //         argumentReversed += char;
//     //     }
//     //     return argumentReversed.reverse();
//     } else if (typeof parameter === "object" && parameter !== null) {
//         parameter.reverse();
//         for (element of parameter) {
//             element = element.reverse();
//         }
//         return parameter; 
//     } else {
//         return parameter;
//     }
// }

// var testArray = [12345, 53, 8, 59];
// console.log(reverse(testArray));


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed

// function addingMachine(array) {
//     var sum = 0;
//     for (num of array) {
//         sum += num;
//     }
//     return sum;
// }

// var newTestArray = [37, 21, 60, 9];
// console.log(addingMachine(newTestArray));

// Alternate way I tried using reduce //
function addingMachine(array) {
    array.reduce(function(total, number) {
        return total + number;
    });
}

var newTestArray = [37, 21, 60, 9];
console.log(addingMachine(newTestArray));


// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin