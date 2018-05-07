/**
 * The call() method calls a function with a given this value and arguments provided individually.
 * if the method is a function in non-strict mode , null and undefined will be replaced with the global object and primitive values will be converted to objects.
 */
// function a() {
//     console.log(this);
// }
// a.call(null);

/**
 * a is hoisted up and a in window is true. It then gets a value of 1 and 
 * console.log prints 1.
 */
// if (("a" in window)) {
//     //console.log(window);
//     var a = 1;
// }
// console.log(a);

/**
 * fn(unknown) => c becomes 5. b = x = 2 and y is 3.
 * The answer is 10 
 */
// var x = 6;
// var y = 4;
// var a = function(b) { return function(c) { 
//     console.log("y,b,c ",y,b,c);
//     return y + b + c;  } };
// x = 2;
// y = 5;
// var fn = a(x);
// x = 1;
// y = 3;
// var unknown = 5;
// console.log(fn(unknown));

/**
 * b is defined in the global space because var is attached to only a
 * The answer will be 5, 5.
 */
// (function() {
//     var a = b = 5;
//     console.log(a);
//  })();
//  console.log(b);

/**
 * Ans - Sheetal, John Doe, Sheetal, Colin Ihrig.
 * test is in global context so obj.prop.getFullName gets executed in global context
 * 
 */

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
       fullname: "Sheetal",
       getFullName: function() {
         return this.fullname;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
console.log(test.call(obj));
console.log(test.call(obj.prop)); 


