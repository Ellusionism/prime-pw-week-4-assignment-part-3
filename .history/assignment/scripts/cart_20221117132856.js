console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item) {
 basket.push(item);
 return true;
}

console.log(`Basket is: ${basket}`);
console.log(`Added coffee: `, addItem(`coffee`));
console.log(`Added almonds: `, addItem(`almonds`));
console.log(`Added butter: `, addItem(`butter`));
console.log(`Added eggs: `, addItem(`butter`));
console.log(`Basket is now:`, basket);

function listItems() {
 for (let i = 0; i < basket.length; i++) {
  console.log("", basket[i])
 }
}