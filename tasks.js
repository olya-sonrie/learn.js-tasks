// //task
// var age = prompt("Write age: ");
// if ((age >= 14) && (age <= 90)) {
	// alert("That's true!");
// } else {
    // alert("Try again!");
// }


// //task
// var age = prompt("Write age: ");
// if (!(age >= 14 && age <= 90)) {
	// alert("That's true!");
// } else {
    // alert("Try again!");
// }
// //1
// var age = prompt("Write age: ");
// if ((age < 14 || age > 90)) {
	// alert("That's true!");
// } else {
    // alert("Try again!");
// }


// //task
// for (var i = 2; i <= 10; i++) {
	// if (i % 2 == 0)
		// alert(i);
// }
// //1
// var i = 0;
// while (i < 3) {
	// alert( "номер " + i + "!" );
	// i++;
// }


// //task
// var i;
// do {
	// i = prompt("input number", 0);
// } while (i <= 100 && i != null);


// //task
// nextNum:
// for (var i = 2; i < 10; i++) {
	// for (var j = 2; j < i; j++) {
		// if (i % j == 0) continue nextNum;
	// }
	// alert(i);
// }


// //task
// var browser = prompt('');
// if (browser == 'IE') {
	// alert( 'О, да у вас IE!' );
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
	// alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
	// alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
// //1
// var a = +prompt('a?', '');
// switch (a) {
// case 0:
  // alert( 0 );
  // break;
// case 1:
  // alert( 1 );
  // break;
// case 2:
// case 3:
  // alert( '2,3' );
  // break;
// }


// //task
// function checkAge(age) {
	// return (age > 18) ? true : confirm('Родители разрешили?');
// }
// //1
// function checkAge(age) {
	// return (age > 18) || confirm('Родители разрешили?');
// }


// //task
// function min(a, b) {
	// if (a < b) {
		// return a;
	// } else {
		// return b;
	// }
// }
// min(5, 4);
// //1
// function min(a, b) {
	// return (a < b) ? a : b;
// }
// min(5, 44);


// //task
// function pow(x, n) {
	// var result = x;
	// for (var i = 1; i < n; i++) {
		// result *= x;
	// }
	// return result;
// }
// var x = prompt("x?");
// var n = prompt("n?");
// if (n <= 1) {
	// prompt("Try again to input n: ")
// } else {
	// alert(pow(x, n));
// }
// //1
// const powNum = (x,n) => x**n; //es6!
// powNum(2,3);


// //task
// function sumTo(n) {
	// if (n!=1) {
  	// return n + sumTo(n-1);
  // } else {
  	// return n;
  // }
// }
// alert(sumTo(100));
// //1
// function sumTo(n) {
	// var result = 0;
	// for (var i = 1; i <= n; i++) {
		// result += i;
	// }
	// return result;
// }
// alert(sumTo(100));
// //2
// function sumTo(n) {
	// return n = n * (n+1) / 2;
// }
// alert(sumTo(100));


// //task
// function factorial(n) {
	// return (n != 1) ? n * factorial(n - 1) : n;
// }
// alert(factorial(5));


// //task
// function fib(n) {
	// var res = 1;
	// for (var i = 1; i <= n; i++) {
		// res = (1 + Math.sqrt(5)) / 2;
	// }
	// return res;
// }
// alert(fib(3));

