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


function reverse(parameter) {
    if (parameter === true) {
        argumentReversed = false;
        return argumentReversed;
    } else if (parameter === false) {
        argumentReversed = true;
        return argumentReversed;
    } else if (typeof parameter === "number") {
        // Turning the number into a string so it can be further manipulated.
        var numberToString = parameter.toString();
        // Turning the string into an array.
        var stringToArray = numberToString.split("");
        // Finally being able to reverse the original input, the array is reversed.
        var reverseTheArray = stringToArray.reverse();
        // Turning the reversed array back into a string.
        var arrayToString = reverseTheArray.join("");
        // Turning the string back into a number. Using parseFloat to account for numbers with decimals.
        var stringToNumber = parseFloat(arrayToString);
        // Returning the reversed number.
        return argumentReversed = stringToNumber;
    } else if (typeof parameter === "string") {
        // I wrote this code before the previous else if argument that takes in a number as a parameter.
        // I broke down the string character by character, in reverse, and added those characters into a new string.
        var tempWord = "";
        for (var i = 0; i < parameter.length; i++) {
            tempWord = tempWord + parameter.charAt(parameter.length - 1 - i);
        }
        return argumentReversed = tempWord;
    } else if (typeof parameter === "object" && parameter !== null) {
        var tempReverseArray = [];
        for (element of parameter) {
            if (typeof element === "number")  {
                // Turning the number into a string so it can be further manipulated.
                var numberToString = parameter.toString();
                // Turning the string into an array.
                var stringToArray = numberToString.split("");
                // Finally being able to reverse the original input, the array is reversed.
                var reverseTheArray = stringToArray.reverse();
                // Turning the reversed array back into a string.
                var arrayToString = reverseTheArray.join("");
                // Turning the string back into a number. Using parseFloat to account for numbers with decimals.
                var stringToNumber = parseFloat(arrayToString);
                // Using push, putting the reversed number into the temporary array.
                tempReverseArray.push(stringToNumber);
            } else if (typeof element === "string") {
                // Turning the string into an array.
                var stringToArray = numberToString.split("");
                // Finally being able to reverse the original input, the array is reversed.
                var reverseTheArray = stringToArray.reverse();
                // Turning the reversed array back into a string.
                var arrayToString = reverseTheArray.join("");
                // Using push, putting the reversed string into the temporary array.
                tempReverseArray.push(arrayToString);
            } else if (typeof element === "boolean") {
                if (element === true) {
                    element = false;
                    tempReverseArray.push(element);
                } else {
                    element = true;
                    tempReverseArray.push(element);
                }
            } else {
                tempReverseArray.push(element);
            } 
        }
        parameter.reverse();
        return parameter; 
    } else {
        return parameter;
    }
}

var testArray = [12345, 53, true, 8, 59];
console.log(reverse(true));
console.log(reverse(testArray));
console.log(reverse("friends"));
console.log(reverse(123456.78));


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed

function addingMachine(array) {
    var sum = 0;
    for (num of array) {
        sum += num;
    }
    return sum;
}

var newTestArray = [37, 21, 60, 9];
console.log(addingMachine(newTestArray));

// Alternate way I tried using reduce //
function addingMachine(array) {
    var arrayTotal = 0;
    array.reduce(function(total, number) {
        return arrayTotal = total + number;
    });
    return arrayTotal;
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

function checkBonus(gInv, pMarg) {
    var bonusTotal = 0;
    var bracketTracker = 0;

    console.log("The gross invoiced was $" + gInv + ".");
    console.log("The profit margin on these sales was $" + pMarg + ".");

    if (pMarg > 1000000) {
        bracketTracker = (pMarg - 1000000) * .40;
        bonus = bracketTracker + 175000 + 80000 + 10000;
    } else if (pMarg > 500000 && pMarg <= 1000000) {
        bracketTracker = (pMarg - 500000) * .35;
        bonus = bracketTracker + 80000 + 10000;
    } else if (pMarg > 100000 && pMarg <= 500000) {
        bracketTracker = (pMarg - 100000) * .20;
        bonus = bracketTracker + 10000;
    } else if (pMarg > 0 && pMarg <= 100000) {
        bracketTracker = pMarg * .10;
        bonus = bracketTracker; 
    } else {
        console.log("No profits means no bonus.");
    }

    return bonus;
}

var grossInvoiced = 3000000;
var profitMargin = 50000;
console.log("You earned a bonus of $" + checkBonus(grossInvoiced, profitMargin) + ".");