console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item) {
 basket.push(item);
 return true;
}

console.log(`Added coffee: `, addItem(`coffee`));
console.log(`Added almonds: `, addItem(`almonds`));
console.log(`Added coffee: `, addItem(`coffee`));

 listItems (i = 0; i<basket.length; i++) {
 console.log("", basket[]);
}