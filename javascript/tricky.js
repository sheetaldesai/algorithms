var foo = {
    
    bar: function() { 
        //console.log("This ", this);
        return this.baz; },
    baz: 1,
  };
//console.log(foo.bar());
// (function() {
//     console.log(arguments[0]());
//     return arguments[0]();
// })(foo.bar);


//   var foo = {
//     bar: function(){ return this.baz; },
//     baz: 1
//   }
//   var t = (f = foo.bar)();
//   console.log(t);


// var f = (function f(){ return "1"; }, function g(){ return 2; });
// console.log(f, typeof f);
// var f = (2,3);
// console.log(f);


// var x = [typeof x, typeof y][1];
// console.log(x);

// var x = [2, 3][1];
// console.log(x);

// function foo(a,b) {
//     console.log(a, b);
//     return a;
// }

// function reverse(func) {
//     console.log("length: ", arguments.length);
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//     //func(a,b);
//     //return func(b,a);
    
// };

// var r = reverse(foo, 3,4);


function a() {
    console.log(this);
}
a.call(null);