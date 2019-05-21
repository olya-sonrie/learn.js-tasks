// var num = 4;
// var c = "#";
// var s = " ";



// for (let j = 0; j < num; j++) {
//   for (let i = 0; i < num; i++) {
//     console.log(c);
//   }
//   console.log(c);
// }




// // 1 task
// alert("hellooooooooooooooooooooooo!");

// // 2 task
// var admin;
// var name = "Василий";

// admin = name;
// alert(admin);

// //3 task
// var planetName = "Земля";
// var userName = "Петя";

// //4 task
// function isInteger(num) {
//   if (num === (num^0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// alert(isInteger(5));

// function isInteger(num) {
//   return (num ^ 0) === num;
// }
// alert(isInteger(5));

// //5 task
// var userName = prompt("What's ur name?", 'Ivan');
// alert(userName);

// //6 task
// var nameJS = prompt("Which is «official» name of JavaScript?", '');
// if (nameJS == "ECMAScript") {
//   alert("True!");
// } else {
//   alert("You don't know? «ECMAScript»!");
// }

// //7 task
// var inputNumber = prompt("Input some number", '');
// if (inputNumber > 0) {
//   alert(1);
// } else if (inputNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// //8 task
// var age = prompt("Write age: ");
// if ((age >= 14) && (age <= 90)) {
// 	alert("That's true!");
// } else {
//     alert("Try again!");
// }


// //task
// var age = prompt("Write age: ");
// if (!(age >= 14 && age <= 90)) {
// 	alert("That's true!");
// } else {
//     alert("Try again!");
// }
// //1
// var age = prompt("Write age: ");
// if ((age < 14 || age > 90)) {
// 	alert("That's true!");
// } else {
//     alert("Try again!");
// }


// //task
// for (var i = 2; i <= 10; i++) {
// 	if (i % 2 == 0)
// 		alert(i);
// }
// //1
// var i = 0;
// while (i < 3) {
// 	alert( "номер " + i + "!" );
// 	i++;
// }


// //task
// var i;
// do {
// 	i = prompt("input number", 0);
// } while (i <= 100 && i != null);


// //task
// nextNum:
// for (var i = 2; i < 10; i++) {
// 	for (var j = 2; j < i; j++) {
// 		if (i % j == 0) continue nextNum;
// 	}
// 	alert(i);
// }


// //task
// var browser = prompt('');
// if (browser == 'IE') {
// 	alert( 'О, да у вас IE!' );
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
// 	alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
// 	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
// //1
// var a = +prompt('a?', '');
// switch (a) {
// case 0:
//   alert( 0 );
//   break;
// case 1:
//   alert( 1 );
//   break;
// case 2:
// case 3:
//   alert( '2,3' );
//   break;
// }


// //task
// function checkAge(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
// }
// //1
// function checkAge(age) {
// 	return (age > 18) || confirm('Родители разрешили?');
// }


// //task
// function min(a, b) {
// 	if (a < b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// min(5, 4);
// //1
// function min(a, b) {
// 	return (a < b) ? a : b;
// }
// min(5, 44);


// //task
// function pow(x, n) {
// 	var result = x;
// 	for (var i = 1; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }
// var x = prompt("x?");
// var n = prompt("n?");
// if (n <= 1) {
// 	prompt("Try again to input n: ")
// } else {
// 	alert(pow(x, n));
// }
// //1
// const powNum = (x,n) => x**n; //es6!
// powNum(2,3);


////task
// function sumTo(n) {
// 	if (n!=1) {
//   	return n + sumTo(n-1);
//   } else {
//   	return n;
//   }
// }
// alert(sumTo(100));

////1
// function sumTo(n) {
// 	var result = 0;
// 	for (var i = 1; i <= n; i++) {
// 		result += i;
// 	}
// 	return result;
// }
// alert(sumTo(100));

////2
// function sumTo(n) {
// 	return n = n * (n+1) / 2;
// }
// alert(sumTo(100));


////task
// function factorial(n) {
// 	return (n != 1) ? n * factorial(n - 1) : n;
// }
// alert(factorial(5));


// //task
// function fib(n) {
//  var res;
// 	for (var i = 0; i <= n; i++) {
//     var l = (1 + Math.sqrt(5)) / 2;
//     var r = (1 - Math.sqrt(5)) / 2;
// 	}
//   res = (l**n - r**n) / Math.sqrt(5);
// 	return Math.round(res);
// }
// console.log(fib(77));
// //1
// function fib(n) {
//   var a = 1,
//       b = 1;
//   for (var i = 3; i <= n; i++) {
//     var c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fib(77));


// //task for tests
// describe("pow", function () {

//   describe("возводит x в степень n", function () {

//     function makeTest(x) {
//       var expected = x * x * x;
//       it("при возведении " + x + " в степень 3 результат: " + expected, function () {
//         assert.equal(pow(x, 3), expected);
//       });
//     }

//     for (var x = 1; x <= 5; x++) {
//       makeTest(x);
//     }

//   });

//   it("при возведении в отрицательную степень результат NaN", function () {
//     assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
//   });

//   it("при возведении в дробную степень результат NaN", function () {
//     assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
//   });

//   describe("любое число, кроме нуля, в степени 0 равно 1", function () {

//     function makeTest(x) {
//       it("при возведении " + x + " в степень 0 результат: 1", function () {
//         assert.equal(pow(x, 0), 1);
//       });
//     }

//     for (var x = -5; x <= 5; x += 2) {
//       makeTest(x);
//     }

//   });

//   it("ноль в нулевой степени даёт NaN", function () {
//     assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
//   });

// });

// //task for html
// <!doctype html>
//   <script src="https://ru.js.cx/test/libs.js"></script>
//   <script src="test.js"></script>
//   <script>

//     /* исправьте этот код */
//     function pow(x, n) {
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;
//     if (n === 0 && x === 0) return NaN;

//     var result = 1;
//     for (var i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
// </script>
// </html>


// //task
// var n = +prompt('n'),
//     m = +prompt('m');
// console.log( n + m );

// //task
// function fib(n) {
//   var a = 1,
//     b = 0,
//     x;
//   for (i = 0; i < n; i++) {
//     x = a + b;
//     a = b
//     b = x;
//   }
//   return b;
// }

// function fibBinet(n) {
//   var n, m, res;
//   for (let i = 0; i <= n; i++) {
//     m = (1 + Math.sqrt(5)) / 2;
//   }
//   res = (m**n) / Math.sqrt(5);
//   return Math.round(res);
// }

// console.log(fib(77));
// console.log(fibBinet(77));

// //task
// var max = 100;
// console.log(Math.round(Math.random() * max));

// //task
// var max = 100,
//     min = 10;
// console.log(Math.round(min + Math.random() * (max - min)));

// //task
// var min, max;
// for (i = 0; i <= 100; i++) {
//   function randomInteger(min, max) {
//     var numb = Math.floor(min + Math.random() * (max + 1 - min));
//     return numb;
//   }
//   console.log(randomInteger(5, 100));
// }

//task
