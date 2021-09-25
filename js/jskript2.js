// Variable Declaration

var s = " ";
var starter = new Array;
starter = [
  ["Ciorba de burta", 3.6],
  ["Ciorba de perisoare", 3.6],
  ["Platou rece", 5.7],
  ["Supa de taietei", 3.6],
];
var maindish = new Array;
maindish = [
  ["Fasole cu ciolan", 6.9],
  ["Grill Mix", 12.0],
  ["Sarmale", 8.9],
  ["Snitel de pui", 8.9],
];
var dessert = new Array;
dessert = [
  ["Clatite", 5.2],
  ["Gomboti", 5.2],
  ["Papanasi", 7.2],
  ["Savarine", 5.2],
];
var beverage = new Array;
beverage = [
  ["Bere la halba", 2.5],
  ["Palinca de prune", 2.5],
  ["Limonada de soc", 4.5],
  ["Visinata", 2.5],
];

//       STARTER FUNCTIONS

// Function Calculate Summe Starter

function calculateStarter(a, b, c, d) {
  return a*starter[0][1] + b*starter[1][1] + c*starter[2][1] + d*starter[3][1];
  };

// Function Show Summe Starter

function showStarterSumme(a, b, c, d) {
var starterSumme = a*starter[0][1] + b*starter[1][1] + c*starter[2][1] + d*starter[3][1];
if (starterSumme > 0) {
  console.log(s.repeat(18) + "Summe Starters: " + "€ " + starterSumme.toFixed(2));
}
return starterSumme;
};

// Function Show Starter

function starterShow(a, b, c, d) {
if (a > 0) {
  let space = 30 - starter[0][0].length;
  console.log(
    a + " x " + starter[0][0] + s.repeat(space) + "€ " + a*starter[0][1].toFixed(2)
  );
}
if (b > 0) {
  let space = 30 - starter[1][0].length;
  console.log(
    b + " x " + starter[1][0] + s.repeat(space) + "€ " + b*starter[1][1].toFixed(2)
  );
}
if (c > 0) {
  let space = 30 - starter[2][0].length;
  console.log(
    c + " x " + starter[2][0] + s.repeat(space) + "€ " + c*starter[2][1].toFixed(2)
  );
}
if (d > 0) {
  let space = 30 - starter[3][0].length;
  console.log(
    d + " x " + starter[3][0] + s.repeat(space) + "€ " + d*starter[3][1].toFixed(2)
  );
}
};

//     MAINDISH FUNCTIONS

//Function Calculate Summe Maindish

function calculateMaindish(a, b, c, d) {
  return a*maindish[0][1] + b*maindish[1][1] + c*maindish[2][1] + d*maindish[3][1];
 
};

//Function Show Summe Maindish

function showMaindishSumme(a, b, c, d) {
  var maindishSumme = a*maindish[0][1] + b*maindish[1][1] + c*maindish[2][1] + d*maindish[3][1];
  if (maindishSumme > 0) {
    console.log(s.repeat(18) + "Summe Maindishs: " + "€ " + maindishSumme.toFixed(2));}
  return maindishSumme;
};

// Function Show Maindish

function maindishShow(a, b, c, d) {
  if (a > 0) {
    let space = 30 - maindish[0][0].length;
    console.log(
      a + " x " + maindish[0][0] + s.repeat(space) + "€ " + a*maindish[0][1].toFixed(2)
    );
  }
  if (b > 0) {
    let space = 30 - maindish[1][0].length;
    console.log(
      b + " x " + maindish[1][0] + s.repeat(space) + "€ " + b*maindish[1][1].toFixed(2)
    );
  }
  if (c > 0) {
    let space = 30 - maindish[2][0].length;
    console.log(
      c + " x " + maindish[2][0] + s.repeat(space) + "€ " + c*maindish[2][1].toFixed(2)
    );
  }
  if (d > 0) {
    let space = 30 - maindish[3][0].length;
    console.log(
      d + " x " + maindish[3][0] + s.repeat(space) + "€ " + d*maindish[3][1].toFixed(2)
    );
  }
};

//       DESERT FUNCTIONS

// Function Calculate Dessert

function calculateDessert(a, b, c, d) {
  return a*dessert[0][1] + b*dessert[1][1] + c*dessert[2][1] + d*dessert[3][1];
};
// Function Show Dessert Summe

function showDessertSumme(a, b, c, d) {
  var dessertSumme = a*dessert[0][1] + b*dessert[1][1] + c*dessert[2][1] + d*dessert[3][1];
  if (dessertSumme > 0) {
    console.log(s.repeat(18) + "Summe Desserts: " + "€ " + dessertSumme.toFixed(2));}
  return dessertSumme;
};

// Function Show Dessert

function dessertShow(a, b, c, d) {
  if (a > 0) {
    let space = 30 - dessert[0][0].length;
    console.log(
      a + " x " + dessert[0][0] + s.repeat(space) + "€ " + a*dessert[0][1].toFixed(2)
    );
  }
  if (b > 0) {
    let space = 30 - dessert[1][0].length;
    console.log(
      b + " x " + dessert[1][0] + s.repeat(space) + "€ " + b*dessert[1][1].toFixed(2)
    );
  }
  if (c > 0) {
    let space = 30 - dessert[2][0].length;
    console.log(
      c + " x " + dessert[2][0] + s.repeat(space) + "€ " + c*dessert[2][1].toFixed(2)
    );
  }
  if (d > 0) {
    let space = 30 - dessert[3][0].length;
    console.log(
      d + " x " + dessert[3][0] + s.repeat(space) + "€ " + d*dessert[3][1].toFixed(2)
    );
  }
};


//        BEVERAGE FUNCTIONS

// Function Calculate beverage

function calculateBeverage(a, b, c, d) {
  return a*beverage[0][1] + b*beverage[1][1] + c*beverage[2][1] + d*beverage[3][1];
};
// Function show beverage summe

function showBeverageSumme(a, b, c, d) {
  var beverageSumme = a*beverage[0][1] + b*beverage[1][1] + c*beverage[2][1] + d*beverage[3][1];
  if (beverageSumme > 0) {
    console.log(s.repeat(18) + "Summe Beverages: " + "€ " + beverageSumme.toFixed(2));}
  return beverageSumme;
};

// Function Show beverage

function beverageShow(a, b, c, d) {
  if (a > 0) {
    let space = 30 - beverage[0][0].length;
    console.log(
      a + " x " + beverage[0][0] + s.repeat(space) + "€ " + a*beverage[0][1].toFixed(2)
    );
  }
  if (b > 0) {
    let space = 30 - beverage[1][0].length;
    console.log(
      b + " x " + beverage[1][0] + s.repeat(space) + "€ " + b*beverage[1][1].toFixed(2)
    );
  }
  if (c > 0) {
    let space = 30 - beverage[2][0].length;
    console.log(
      c + " x " + beverage[2][0] + s.repeat(space) + "€ " + c*beverage[2][1].toFixed(2)
    );
  }
  if (d > 0) {
    let space = 30 - beverage[3][0].length;
    console.log(
      d + " x " + beverage[3][0] + s.repeat(space) + "€ " + d*beverage[3][1].toFixed(2)
    );
  }
};

function calculateInvoice(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  let summe = starterPrice + maindishPrice + dessertPrice + beveragePrice;
  console.log("Total Summe" + s.repeat(23) + "€ " + summe.toFixed(2));
  return summe;
};

function calculateInvoiceStudents(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  let summe = (starterPrice + maindishPrice + dessertPrice) - 10% + beveragePrice;
  console.log("Total Summe for Students" + s.repeat(10) + "€ " + summe.toFixed(2));
  return summe;
};

// Test Functions

starterShow(1, 2, 3, 4);
showStarterSumme(1, 2, 3, 4);
maindishShow(4, 3, 2, 1);
showMaindishSumme(4, 3, 2, 1);
dessertShow(2, 1, 4, 3);
showDessertSumme(2, 1, 4, 3);
beverageShow(3, 4, 1, 2);
showBeverageSumme(3, 4, 1, 2);

let starterPrice = calculateStarter(1, 2, 3, 4);
let maindishPrice = calculateMaindish(4, 3, 2, 1);
let dessertPrice = calculateDessert(2, 1, 4, 3);
let beveragePrice = calculateBeverage(3, 4, 1, 2);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

calculateInvoiceStudents(starterPrice, maindishPrice, dessertPrice, beveragePrice);
starterShow(1, 2, 3, 4);
showStarterSumme(1, 2, 3, 4);
maindishShow(4, 3, 2, 1);
showMaindishSumme(4, 3, 2, 1);
dessertShow(2, 1, 4, 3);
showDessertSumme(2, 1, 4, 3);
beverageShow(3, 4, 1, 2);
showBeverageSumme(3, 4, 1, 2);

let starterPrice = calculateStarter(1, 2, 3, 4);
let maindishPrice = calculateMaindish(4, 3, 2, 1);
let dessertPrice = calculateDessert(2, 1, 4, 3);
let beveragePrice = calculateBeverage(3, 4, 1, 2);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

calculateInvoiceStudents(starterPrice, maindishPrice, dessertPrice, beveragePrice);
starterShow(1, 2, 3, 4);
showStarterSumme(1, 2, 3, 4);
maindishShow(4, 3, 2, 1);
showMaindishSumme(4, 3, 2, 1);
dessertShow(2, 1, 4, 3);
showDessertSumme(2, 1, 4, 3);
beverageShow(3, 4, 1, 2);
showBeverageSumme(3, 4, 1, 2);

let starterPrice = calculateStarter(1, 2, 3, 4);
let maindishPrice = calculateMaindish(4, 3, 2, 1);
let dessertPrice = calculateDessert(2, 1, 4, 3);
let beveragePrice = calculateBeverage(3, 4, 1, 2);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

calculateInvoiceStudents(starterPrice, maindishPrice, dessertPrice, beveragePrice);
starterShow(1, 2, 3, 4);
showStarterSumme(1, 2, 3, 4);
maindishShow(4, 3, 2, 1);
showMaindishSumme(4, 3, 2, 1);
dessertShow(2, 1, 4, 3);
showDessertSumme(2, 1, 4, 3);
beverageShow(3, 4, 1, 2);
showBeverageSumme(3, 4, 1, 2);

let starterPrice = calculateStarter(1, 2, 3, 4);
let maindishPrice = calculateMaindish(4, 3, 2, 1);
let dessertPrice = calculateDessert(2, 1, 4, 3);
let beveragePrice = calculateBeverage(3, 4, 1, 2);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

calculateInvoiceStudents(starterPrice, maindishPrice, dessertPrice, beveragePrice);




/* var s = " ";

//Function starter return value starterPrice

function starter(a, b, c, d) {
  let starter = [
    ["Ciorba de burta", 3.6],
    ["Ciorba de perisoare", 3.6],
    ["Platou rece", 5.7],
    ["Supa de taietei", 3.6],
  ];
  starter[0][1] *= a;
  starter[1][1] *= b;
  starter[2][1] *= c;
  starter[3][1] *= d;
var summeStarter = starter[0][1] + starter[1][1] + starter[2][1] + starter[3][1];
  return summeStarter;
}
//function Starter Show

function starterShow(a, b, c, d){
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
}

//function Main Dish Price

function Maindish(a, b, c, d) {
  let maindish = [
    ["Fasole cu ciolan", 6.9],
    ["Grill Mix", 12.0],
    ["Sarmale", 8.9],
    ["Snitel de pui", 8.9],
  ];
  maindish[0][1] *= a;
  maindish[1][1] *= b;
  maindish[2][1] *= c;
  maindish[3][1] *= d;
  var maindishPrice = maindish[0][1] + maindish[1][1] + maindish[2][1] + maindish[3][1];
  console.log(s.repeat(15) + "Summe Main Dishes: " + "€ " + maindishPrice);
  return maindishPrice;
}

// Function Maindish Show

function maindishShow(a, b, c, d) {
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
}

//function Dessert

function dessert(a, b, c, d) {
  let dessert = [
    ["Clatite", 5.2],
    ["Gomboti", 5.2],
    ["Papanasi", 7.2],
    ["Savarine", 5.2],
  ];
  dessert[0][1] *= a;
  dessert[1][1] *= b;
  dessert[2][1] *= c;
  dessert[3][1] *= d;
 
  var dessertPrice = dessert[0][1] + dessert[1][1] + dessert[2][1] + dessert[3][1];
  console.log(s.repeat(18) + "Summe desserts: " + "€ " + dessertPrice);
  return dessert;
  console.log(s);
}

// Function Dessert Show

function dessertShow(a, b, c, d) {
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
}

//function Beverage

function beverage(a, b, c, d) {
  let beverage = [
    ["Bere la halba", 2.5],
    ["Palinca de prune", 2.5],
    ["Limonada de soc", 4.5],
    ["Visinata", 2.5],
  ];
  beverage[0][1] *= a;
  beverage[1][1] *= b;
  beverage[2][1] *= c;
  beverage[3][1] *= d;
  
  var beveragePrice = beverage[0][1] + beverage[1][1] + beverage[2][1] + beverage[3][1];
  console.log(s.repeat(17) + "Summe beverages: " + "€ " + beveragePrice);
  return beverage;
  console.log(s);
}

// Function Beverage Show

function beverageShow(a, b, c, d){
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
}

//function calculateInvoice

function calculateInvoice(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  let summe = starterPrice + maindishPrice + dessertPrice + beveragePrice;
  console.log("Total Summe" + s.repeat(23) + "€ " + summe);
  return summe;
  console.log(s);
  console.log(s);
  console.log(s);
  console.log(s);
}

//Testing the functions
starter(1, 2, 3, 4);
maindish(4, 3, 2, 1);
dessert(2, 1, 4, 3);
beverage(3, 4, 1, 2);



calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

starter(1, 0, 0, 0);
maindish(0, 1, 0, 0);
dessert(0, 0, 1, 0);
beverage(0, 0, 0, 1);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

starter(0, 1, 0, 0);
maindish(1, 0, 0, 0);
dessert(0, 0, 0, 1);
beverage(0, 0, 1, 0);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);

starter(0, 0, 0, 1);
maindish(0, 0, 1, 0);
dessert(0, 1, 0, 0);
beverage(1, 0, 0, 0);

calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice);
*/
