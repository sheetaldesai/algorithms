// Replace ? in binary string with 0 and 1
// binary("?1?") should return an array of ["010","011","110","111"]

function binary (str,arr=[]) {
    console.log("Called binary wiht str: " + str + " Arr: " + arr)
    var found = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '?') {
            found = true
            for (var j = 0; j <= 1; j++) {
                var sub1 = str.substring(0,i);
                var sub2 = str.substring(i+1);
                var newStr = sub1 + j + sub2
                console.log("New str: " + newStr)
                binary(newStr,arr)
            }
            
            break;
        }
    }
    console.log("Pushing str to array")
    if (!found) {
        arr.push(str)
    }
    
    return arr
}

var arr = binary("1?0??")
console.log(arr)