function longestPalindrom (str) {
    var start = 0,
        end = 0,
        longest = str[0],
        temp = "";

    for (var i = 0; i < str.length -1; i++) {
        console.log("Inside for loop, i="+i);
        if (str[i]==str[i+1]) {
            console.log("i = i+1 " + str[i] + " " + str[i+1]);
            start = i;
            end = i+1;
            console.log("start: " + start + " end: " + end);
        }
        else if (str[i-1] == str[i+1]) {
     
            start = i-1;
            end = i+1;
            console.log("(i-1) = (i+1), start: " + start + " end: " + end + " " + str[i-1] + " " + str[i+1]) ;
        }
        else {
            continue;
        }

        while (end <= str.length -1 && start >=0) {
            console.log("Inside while loop, start: " + start + " end: " + end);
            if (str[start] == str[end]) {
                temp = str.substring(start,end+1);
                console.log("temp: " + temp);
                start --;
                end ++
            }
            else {
                break;
            }
        }

        if (longest.length < temp.length) {
            longest = temp;
            console.log ("New longest is " + longest);
        }//

    }

    return longest;
}

console.log(longestPalindrom("leetteel"));
//console.log(longestPalindrom("abdbc"));
//console.log(longestPalindrom("aa"));
//console.log(longestPalindrom("abacc"));
//console.log(longestPalindrom("aacbc"));