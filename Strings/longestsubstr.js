/* Find longest substring without repeating characters
    "abcabcabcdbd" should return "abcd"
    "pwwek" should return "wek"
*/

function longestSubstr(str) {
    var dict1 = {}, dict2 = {};
    var subStr1 = "", subStr2 = "";

    console.log("str length ", str, str.length);

    for (var i=0; i < str.length; i++) {
        console.log("str[i], dict1[str[i]] ", str[i], dict1[str[i]]);
        if (dict1[str[i]] === undefined) {
            dict1[str[i]] = i;
            subStr1 += str[i];
            console.log("substr1: ", subStr1);
        } else {
            if (subStr1.length > subStr2.length) {
                subStr2 = subStr1;
                dict2 = dict1;
            }
            dict1 = {};
            dict1[str[i]] = i;
            subStr1 = str[i];
            console.log("subStr2: subStr1:", subStr2, subStr1);
        }
    }

    if (subStr1.length > subStr2.length) {
        return subStr1;
    }
    else {
        return subStr2;
    }
}

var str = "abdabweec";
var substr = longestSubstr(str);
console.log("Longest substring ", substr);