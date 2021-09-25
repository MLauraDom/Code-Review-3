//function Starter

function starterPrice(a, b, c, d) {
  var starter = [
    ["Ciorba de burta", 3.6],
    ["Ciorba de perisoare", 3.6],
    ["Platou rece", 5.7],
    ["Supa de taietei", 3.6],
  ];
  starter[0][1] *= a;
  starter[1][1] *= b;
  starter[2][1] *= c;
  starter[3][1] *= d;
  if (a > 0) {
    let space = 30 - starter[0][0].length;
    console.log(
      a + " x " + starter[0][0] + s.repeat(space) + "€ " + starter[0][1]
    );
  }
  if (b > 0) {
    let space = 30 - starter[1][0].length;
    console.log(
      b + " x " + starter[1][0] + s.repeat(space) + "€ " + starter[1][1]
    );
  }
  if (c > 0) {
    let space = 30 - starter[2][0].length;
    console.log(
      c + " x " + starter[2][0] + s.repeat(space) + "€ " + starter[2][1]
    );
  }
  if (d > 0) {
    let space = 30 - starter[3][0].length;
    console.log(
      d + " x " + starter[3][0] + s.repeat(space) + "€ " + starter[3][1]
    );
  }
  starterPrice = starter[0][1] + starter[1][1] + starter[2][1] + starter[3][1];
  console.log(s.repeat(18) + "Summe Starters: " + "€ " + starterPrice);
  console.log(s);
}

//function Main Dish

function maindishPrice(a, b, c, d) {
  var maindish = [
    ["Fasole cu ciolan", 6.9],
    ["Grill Mix", 12.0],
    ["Sarmale", 8.9],
    ["Snitel de pui", 8.9],
  ];
  maindish[0][1] *= a;
  maindish[1][1] *= b;
  maindish[2][1] *= c;
  maindish[3][1] *= d;
  if (a > 0) {
    let space = 30 - maindish[0][0].length;
    console.log(
      a + " x " + maindish[0][0] + s.repeat(space) + "€ " + maindish[0][1]
    );
  }
  if (b > 0) {
    let space = 30 - maindish[1][0].length;
    console.log(
      b + " x " + maindish[1][0] + s.repeat(space) + "€ " + maindish[1][1]
    );
  }
  if (c > 0) {
    let space = 30 - maindish[2][0].length;
    console.log(
      c + " x " + maindish[2][0] + s.repeat(space) + "€ " + maindish[2][1]
    );
  }
  if (d > 0) {
    let space = 30 - maindish[3][0].length;
    console.log(
      d + " x " + maindish[3][0] + s.repeat(space) + "€ " + maindish[3][1]
    );
  }
  maindishPrice =
    maindish[0][1] + maindish[1][1] + maindish[2][1] + maindish[3][1];
  console.log(s.repeat(15) + "Summe Main Dishes: " + "€ " + maindishPrice);
  console.log(s);
}

//function Dessert

function dessertPrice(a, b, c, d) {
  var dessert = [
    ["Clatite", 5.2],
    ["Gomboti", 5.2],
    ["Papanasi", 7.2],
    ["Savarine", 5.2],
  ];
  dessert[0][1] *= a;
  dessert[1][1] *= b;
  dessert[2][1] *= c;
  dessert[3][1] *= d;
  if (a > 0) {
    let space = 30 - dessert[0][0].length;
    console.log(
      a + " x " + dessert[0][0] + s.repeat(space) + "€ " + dessert[0][1]
    );
  }
  if (b > 0) {
    let space = 30 - dessert[1][0].length;
    console.log(
      b + " x " + dessert[1][0] + s.repeat(space) + "€ " + dessert[1][1]
    );
  }
  if (c > 0) {
    let space = 30 - dessert[2][0].length;
    console.log(
      c + " x " + dessert[2][0] + s.repeat(space) + "€ " + dessert[2][1]
    );
  }
  if (d > 0) {
    let space = 30 - dessert[3][0].length;
    console.log(
      d + " x " + dessert[3][0] + s.repeat(space) + "€ " + dessert[3][1]
    );
  }
  dessertPrice = dessert[0][1] + dessert[1][1] + dessert[2][1] + dessert[3][1];
  console.log(s.repeat(18) + "Summe desserts: " + "€ " + dessertPrice);
  console.log(s);
}

//function Beverage

function beveragePrice(a, b, c, d) {
  var beverage = [
    ["Bere la halba", 2.5],
    ["Palinca de prune", 2.5],
    ["Limonada de soc", 4.5],
    ["Visinata", 2.5],
  ];
  beverage[0][1] *= a;
  beverage[1][1] *= b;
  beverage[2][1] *= c;
  beverage[3][1] *= d;
  if (a > 0) {
    let space = 30 - beverage[0][0].length;
    console.log(
      a + " x " + beverage[0][0] + s.repeat(space) + "€ " + beverage[0][1]
    );
  }
  if (b > 0) {
    let space = 30 - beverage[1][0].length;
    console.log(
      b + " x " + beverage[1][0] + s.repeat(space) + "€ " + beverage[1][1]
    );
  }
  if (c > 0) {
    let space = 30 - beverage[2][0].length;
    console.log(
      c + " x " + beverage[2][0] + s.repeat(space) + "€ " + beverage[2][1]
    );
  }
  if (d > 0) {
    let space = 30 - beverage[3][0].length;
    console.log(
      d + " x " + beverage[3][0] + s.repeat(space) + "€ " + beverage[3][1]
    );
  }
  beveragePrice =
    beverage[0][1] + beverage[1][1] + beverage[2][1] + beverage[3][1];
  console.log(s.repeat(17) + "Summe beverages: " + "€ " + beveragePrice);
  console.log(s);
}

//function calculateInvoice

function calculateInvoice(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  var s = " ";
  starterPrice(1, 0, 0, 0);
  maindishPrice(0, 1, 0, 0);
  dessertPrice(0, 0, 1, 0);
  beveragePrice(0, 0, 0, 1);
  let summe = starterPrice + maindishPrice + dessertPrice + beveragePrice;
  console.log("Summe" + s.repeat(29) + "€ " + summe);
}

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

/*
starterPrice(0, 1, 0, 0);
maindishPrice(1, 0, 0, 0);
dessertPrice(0, 0, 0, 1);
beveragePrice(0, 0, 1, 0);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

starterPrice(0, 0, 0, 1);
maindishPrice(0, 0, 1, 0);
dessertPrice(0, 1, 0, 0);
beveragePrice(1, 0, 0, 0);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

starterPrice(1, 2, 3, 4);
maindishPrice(4, 3, 2, 1);
dessertPrice(2, 1, 4, 3);
beveragePrice(3, 4, 1, 2);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);
/*
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
*/
