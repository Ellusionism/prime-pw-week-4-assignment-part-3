console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item) {
 basket.push(item);
 console.log(`Added ${item}:`, item);
 return true;
}

console.log(`Basket is: ${basket}`);

addItem(`coffee`)
addItem(`almonds`)
addItem(`butter`)
addItem(`eggs`)

console.log(`Basket is now:`, basket);

function listItems(coint) {
 for (let i = 0; i < list.length; i++) {
  console.log(`Item ${i + 1}:`, list[i])
 }
}

listItems(basket);

function empty(cont) {
 cont.length = 0;
}