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
console.log(`Added coffee: `, addItem(`coffee`));
console.log(`Added almonds: `, addItem(`almonds`));
console.log(`Added butter: `, addItem(`butter`));
addItem(`eggs`)
console.log(`Basket is now:`, basket);

function listItems(cont) {
 for (let i = 0; i < cont.length; i++) {
  console.log(`Item ${i + 1}:`, cont[i])
 }
}

listItems(basket);