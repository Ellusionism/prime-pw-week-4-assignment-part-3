console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5;

function isFull (cont) {
 if (cont.length >= maxItems) {
  return true;
 } else {
  return false;
 }
}

console.log(isFull(basket));

function addItem (item) {
 console.log(`Adding ${item} to basket...`);
 if (isFull(basket)) {
  console.log(`Basket is full, could not add ${item}.`);
  return false;
 } else {
  basket.push(item);
  console.log(`Added ${item}.`);
  return true;
 }
}

function removeItem (item) {
 console.log(`Removing ${item} from basket...`);
 if (basket.indexOf(item)) {
  basket.splice(basket.indexOf(item));
  console.log(`Removed ${item}.`);
 } else {
  console.log(`Could not find ${item} in basket, no items removed.`)
 }
}

console.log(`Basket is: ${basket}`);

addItem(`coffee`)
addItem(`eggs`)
addItem(`butter`)
addItem(`monk fruit`)
addItem(`heavy whipping cream`)
addItem(`almonds`)
removeItem(`monk fruit`)
addItem(`ice cream`)


console.log(`Basket is now:`, basket);

function listItems(cont) {
 for (let i = 0; i < cont.length; i++) {
  console.log(`Item ${i + 1}:`, cont[i])
 }
}

listItems(basket);

function empty(cont) {
 cont.length = 0;
 return true;
}

console.log(`Emptied basket:`, empty(basket));