console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (let item) {
 basket.push(item);
 return true;
}

console.log(`Added coffee: `, addItem(`coffee`));
console.log(`Added almonds: `, addItem(`almonds`));
console.log(`Added coffee: `, addItem(`coffee`));

function listItems() {
 for (let item of basket) {
  console.log("Items:", basket[item]);
 }
}