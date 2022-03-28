console.log("Spanish Project - Calculate");
console.log("==========================");
console.log("Loaded calculate.js");

var fullList = document.getElementById("ul");
var listItem = fullList.getElementsByTagName("li");

var itemArray = [];

for (var i = 0; i < listItem.length; i++) {
    itemArray.push(parseInt(listItem[i].dataset.price));
};

const sum = itemArray.reduce((partialSum, a) => partialSum + a, 0);
document.getElementById("total").innerHTML = `Total: $${sum}`;

console.log("==========================");
console.log(`Total: $${sum}`);

console.log("Made by Luis Quezada");