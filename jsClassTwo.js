// var x = 5;


// async
// var myTimer = setTimeout(function(){
// 	x = 100;
// 	console.log('printing X : ', x);
// }, 1000);

// console.log('externally printing X: ', x);



// sync
// for (var i = 0; i < 10000000; i++){
// 	x += 1;
// 	console.log(i);
// }
// console.log('printing X : ', x);

// console.log('externally printing X: ', x);



// // hoisting
// function myHoisting(){

// 	console.log(x);
// 	var x = 10;
// 	console.log('value of X = ', x);
// }


// myHoisting();


// // can also write this as
// function myHoisting(){
// 	var x;
// 	console.log(x);
// 	x = 10;
// 	console.log('value of X = ', x);
// }


// closures
// function Abc(){

// 	function InnerAbc(){
// 		return 'innerAbc Called';
// 	}

// 	return InnerAbc;

// }

// console.log('calling abc');
// // Abc()();
// var outerCall = Abc();

// var innerCall = outerCall();
// console.log(innerCall);


// (function callDirectly(){
// 	console.log( "Called Directly");
// })();



// function multiply(m){
// 	function printTable(n){
// 		console.log(m*n);
// 	}

// 	return printTable;
// }

// var a = multiply(5);

// a(10);
// a(2);


// var b = multiply(13);
// b(8);
// b(5);



// prototypes
// var Animal = function(animalNamem){
// 	this.name = animalName;
// 	// setting a property for constructor
// 	this.canFly = canFly
// }


// var dog = new Animal('Dog');
// var cat = new Animal('Cat');

// Animal.prototype.canFly = true;

// dog.__proto__.canFly = false;

// cat.canFly = true;

// console.log(cat);
// console.log(cat.__proto__);







































