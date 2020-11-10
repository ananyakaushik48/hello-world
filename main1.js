//lets make a palindrome check object and function

/*const palin = {
	regularString:prompt("Enter your String"), 
	palinCheck(){
		let reversedString = '';
		for (let i = palin.regularString.length - 1; i >= 0; i--) { 
		reversedString += palin.regularString[i];
		}
		console.log(reversedString);
		if (reversedString == palin.regularString){
			console.log("Your entered string is a palindrome");
		}
		else
			console.log("not a palindrome");
	},

}
console.log(palin.regularString);
palin.palinCheck();
*/
//This is a calculator 
/*
const rangeSum = {
	numberOne: prompt("Enter the first number"),
	numberTwo: prompt("enter the second number"),
	sum(){
		let total = 0;
		for (var i = rangeSum.numberOne; i <= rangeSum.numberTwo; i++) {
			total += parseFloat(i);
		}
		console.log(total);
	}

}

rangeSum.sum();
*/

//Designing a calculator with basic functionality and factorial
function siblings(){
    var siblings = ["Ananya","Avani","Arnav"];
    function siblingCount (){
        var siblingsLength = siblings.length;
/*NOTE: In the function siblingCount() the declared variable siblings can
only be accessed within the function and no where else.*/
        return siblings.length;
    }
    function joinSiblingNames(){
    	return "I have "+siblingCount()+" siblings: \n\n" + siblings.join("\n");
    }return joinSiblingNames();

}
alert(siblings());

//Understanding closure for JavaScript

/*What is Closure?
We have understood the properties of local and Global functions:
>>Global functions/ Variables exist on a scope such that said functions and 
variables can be access by All functions withing that Window(browser window).
>>Local Functions/variables are variables/functions, which after declaration,
can only be accessed within the scope of declaration, for example the same 
function/loop/object.
*/

//Example of a Closure:
function add(x){
	return function (y){
		return x + y;
	}
}

var add5= add(5);
var no8 = add5(3);

/*
Explanation how closure works:
here the function call add(5) will store the value of x as 5 as the last
value of x before closing context. Note, the result of assiging function call 
add(5) to variable add5 will remember the value of x before the closing of 
context will always be 5. Hence when no8 is assigned the value of add5(3), the
compiler knows the value of x in add5 = 5, hence it would return value 8.
Basically for JavaScript add5() looks like:


function add5(y) {
	return 5 + y;
}

This is how closures are used in JavaScript.

*/