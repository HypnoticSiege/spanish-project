var fullList = document.getElementById("ul");
var listItem = fullList.getElementsByTagName("li");

var itemArray = [];

for (var i = 0; i < listItem.length; i++) {
    itemArray.push(parseInt(listItem[i].dataset.price));
};

console.table(itemArray);

const sum = itemArray.reduce((partialSum, a) => partialSum + a, 0);
document.getElementById("total").innerHTML = `Total: $${sum}`;