//Chelsea's suggestions
// 1. Figure out what working with.
// 2. What do I want to do with it? TELL YOURSELF IN A SENTENCE: What do I want to do?
// 3. What's the best way to get that data (what kind of forEach)?
// 4. Define the function.
// 5. Decide what you want the function to do.
// 6. Console log the outcome.


//QUESTION 1
// Show me how to calculate the average price of all items. 
// Please console.log the average.
// What I want console to do:
	// 	1. Go down the list of items
	// 	2. Find price
	// 	3. Call up the price
	// 	4. Average the price
	// 	5. Spit it out

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

//QUESTION 2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
//
var itemsBetween = [];

items.forEach ( function (item){
	if (item.price >= 14 && item.price <= 18) {
		itemsBetween.push(item.title);
	}
});
console.log(itemsBetween);

//QUESTION 3
// Show me how find the item with a "GBP" currency code and print its name and price. 
// Please console.log the one you find.
//

var QUESTION3 = items.filter (function (object){
	return object.currency_code === "GBP";

});
	console.log(QUESTION3.currency_code);

QUESTION3.forEach( function(beer){	
	console.log(beer.title)
});

//QUESTION 4
//Show me how to find which items are made of wood. 
//Please console.log the ones you find.

var wood = items.filter ( function (object){
	return object.materials.indexOf("wood") >= 0;
		
});
	wood.forEach ( function (item) {
		console.log(item.title);
	});

//QUESTION 5
//Show me how to find 
//which items are made of eight or more materials. Please console.log the ones you find.

// What's the question asking: It's asking that within the bucket of items,
// drill down to materials and see which ones contain eight or more items.
// Here's the catch: Within Materials objects is an array. So he's really
// asking that within the Materials object, which ARRAY contains eight or
// more items.

// //var itemsMaterials = [];
// items.forEach ( function (item){
// 	if (item.materials.length >= 7) {
// 		itemsMaterials.push(item.materials.length);
// });

// 	itemsMaterials.forEach (function (eight) {
// 	console.log(eight);
// 	});

var itemsMaterials = items.filter ( function (object){
	return object.title.length >= 7;

});
	console.log(itemsMaterials);

//QUESTION 6
//Show me how to calculate how many items were made by their sellers.



