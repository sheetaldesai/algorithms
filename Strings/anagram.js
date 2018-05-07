function anagram(str, prefix="", arr=[]) {
    // var len = str.length

    if (str.length === 0) {
        console.log("Pushing to array: ",prefix)
        arr.push(prefix)
    }
    else {
        for (var i = 0; i < str.length; i++) {
            newprefix = prefix + str[i]
            newstr = str.substring(0,i) + str.substring(i+1)
            console.log("Str: " + newstr + " Prefix: " + newprefix + " arr " + arr + " i: " + i)
            anagram(newstr,newprefix,arr)
        }

    }
    return arr
}

var arr = anagram("abc")
console.log(arr)