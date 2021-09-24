/*(20 points) Create the function calculateInvoice() in Javascript that returns 
the invoice for one customer (how much they spent). 
The parameters of the function should be starterPrice, maindishPrice, dessertPrice and beveragePrice. 
The function will return the sum of these four parameters.

(10 points) Use the prices on your menu to create four variables that you will 
pass to the function calculateInvoice() as arguments. 
Print the result on the console. 
Note: You should do it manually since we didn't learn how to take values from html elements yet.

(10 points) Calculate at least 3 invoices using combinations of different dishes on your menu 
and print them on the console (using one dish of each category).*/

var starter = [["Ciorba de burta", 3.60], ["Ciorba de perisoare", 3.60], ["Platou rece", 5.70], ["Supa de taietei", 3.60]];
var main = [["Fasole cu ciolan", 6.90], ["Grill Mix", 12.00], ["Sarmale", 8.90], ["Snitel de pui", 8.90]];
var dessert = [["Clatite", 5.20], ["Gomboti", 5.20], ["Papanasi", 7.20], ["Savarine", 5.20]];
var beverage = [["Bere la halba", 2.50], ["Palinca de prune", 2.50], ["Limonada de soc", 4.50], ["Visinata", 2.50]];
var s = " ";

function.calculateInvoice(starterPrice)(maindishPrice)(dessertPrice)(beveragePrice) {
    let summe = starterPrice + maindishPrice + dessertPrice + beveragePrice
    console.log("Summe" + s.repeat(24) + summe)
}










console.log(s)
console.log(s)
console.log(s)
console.log("Our MENU")
console.log(s)
console.log("STARTERS")
console.log(s)
 function displayStarter(i) {
    let space = 30 - starter[i][0].length;
    console.log(starter[i][0] + s.repeat(space) + starter[i][1]);
}

for (var i = 0; i < 4; i++) {
displayStarter(i);
}
console.log(s)
console.log("Main dishes")
console.log(s)
function displayMain(i) {
    let space = 30 - main[i][0].length;
    console.log(main[i][0] + s.repeat(space) + main[i][1]);
}

for (var i = 0; i < 4; i++) {
displayMain(i);
}
console.log(s)
console.log("Desserts")
console.log(s)
function displayDessert(i) {
    let space = 30 - dessert[i][0].length;
    console.log(dessert[i][0] + s.repeat(space) + dessert[i][1]);
}

for (var i = 0; i < 4; i++) {
displayDessert(i);
}
console.log(s)
console.log("Beverage")
console.log(s)
function displayBeverage(i) {
    let space = 30 - beverage[i][0].length;
    console.log(beverage[i][0] + s.repeat(space) + beverage[i][1]);
}

for (var i = 0; i < 4; i++) {
displayBeverage(i);
}