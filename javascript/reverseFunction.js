//
// Given a function with arguments a and b, reverse the order bo the arguments.\
// Subtract(5,1) => 4, reverse(subtract)(5,1) should return -1.
//

function subtract(a, b) {
    return (a-b);
}

function reverse(func){
    console.log(func);
    return function(a,b) {
        return func(b,a);
    }
    
}

var rev = reverse(subtract)(5,1);
console.log(rev);

var rev = reverse(subtract);
var result = rev(5,1);
console.log("Result: ", result);