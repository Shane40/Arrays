console.log("test");


// 1. What am I working with?
// 2. What do I want to do with it? TELL YOURSELF IN A SENTENCE: WHat do I want to do?
// 3. What's the best way to get that data (what kind of forEach)
//4. Define the function?
//5. Decide what you want



	// What I want console to do:
	// 	1. Go down the list of items
	// 	2. Find price
	// 	3. Call up the price
	// 	4. Average the price
	// 	5. Spit it out


//QUESTION 1
//
var emptyArray = [];
console.log(emptyArray);

items.forEach( function(object){
//console.log(object.price);
emptyArray.push (object.price)
});

//console.log(items);
console.log(emptyArray);

var total = emptyArray.reduce(function (a, b) {
 	return a+b

 });
console.log (total);

var average = total / emptyArray.length;
console.log (average.toFixed(2));

console.log ("The average price is " + average.toFixed(2));

//QUESTIONXXXX
//
var QUESTION1 = emptyArray.filter (function (object){
	return object === 20;
});
	console.log(QUESTION1);



// var newArray = [];

// items.forEach ( function(object){
// newArray.push (object.price);
// });

// console.log(newArray);

//QUESTION2
var itemsBetween = [];

items.forEach ( function (item){
	if (item.price >= 14 && item.price <= 18) {
		itemsBetween.push(item.title);
	}
	
});
console.log(itemsBetween);

//QUESTION3


