function go(name, age ){
	alert(name + age);
}

var myList = ['Apples','Oranges','Bananas',go];

// Understanding javascript arrays:
/*
Arrays:
JavaScript arrays can hold anything:
>Strings
>numbers
>variables
>functions(In JavaScript all functions are variables)
>Arrays
*/

// Lets make a basic looping structure
//while loop
var param1 = 0;
while(param1<10){
	console.log("tried it "+param1);
	param1++;
}


//do while loop 
var times = 0;

do{
	times ++;
	console.log("tried it ", times)
}while(times<10);

//for loop 
for (var k = myList.length - 1; k >= 0; k--) {
	if(myList[k]== go){
		go(k,k+1);
	}
	else{
		console.log(myList[k]+" in my basket");
	}	
}
