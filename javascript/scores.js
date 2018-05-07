function climbingLeaderboard(scores, alice) {
    // Complete this function
    var ranks = {};
    var rank = 1;
    var results = [];
    console.log(scores, alice);
    for (var i=0; i <scores.length; i++) {
        if (!(scores[i] in ranks)) {
            ranks[scores[i]] = rank++;
        }
    }
    console.log(ranks);
    
    for(var i=0; i< alice.length; i++) {
        console.log("alice[i]: ", alice[i]);
        //console.log(ranks[alice[i]]);
        if (alice[i] in ranks) {
            results.push(ranks[alice[i]]);
            console.log("found in dict :",ranks[alice[i]]);
        } else if (alice[i] > scores[0]) {
            results.push(1);
        }
        else {
            var rank = findNextLargestNumber(scores, alice[i]);
            console.log("rank: ", rank);
            results.push(ranks[rank] +1);
            //console.log(ranks[rank]+1);
        }
    }
    return results;
}



function findNextLargestNumber(scores, num) {
    console.log("scores: num length", scores, num, scores.length-1);

    for (var i = scores.length - 1; i>=0; i--) {
        console.log(scores[i]);
        if (scores[i] > num) {
            console.log("returning ", scores[i]);
            return scores[i];
        }
    }

    return 0;

}

function climbingLeaderboard1(scores, alice) {
    var uniqueScores = [];
    var results = [];

    for (var i = 0; i < scores.length; i++) {
        if (!uniqueScores.includes(scores[i])) {
            uniqueScores.push(scores[i]);
        }
    }
    console.log("Unique scores: ", uniqueScores);

    for (var i = 0; i < alice.length; i++) {
        if (alice[i] < uniqueScores[uniqueScores.length-1]) {
            results.push(uniqueScores.length+1);
            console.log("Found smallest score ", alice[i]);
        } else if (alice[i] > uniqueScores[0]) {
            console.log("Found greatest score", alice[i]);
            results.push(1);
        } else {
            for (var j = 0; j < uniqueScores.length; j++) {
                if (alice[i] == uniqueScores[j]) {
                    results.push(j+1);
                    console.log("Found equal score", alice[i]);
                } else {
                    if (uniqueScores[j] > alice[i] && uniqueScores[j+1] < alice[i]) {
                        console.log("Found score between ", uniqueScores[j] + " " + uniqueScores[j+1]);
                        results.push(j+2);
                    }
                }        
            }
        }
    }

    return results;


    
}

var scores = [100,100,50,40,40,20, 10];
var alice = [5, 25, 50, 120];
var results = climbingLeaderboard(scores, alice);
console.log(results);
