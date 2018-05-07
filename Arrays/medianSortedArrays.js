/* Find median of 2 sorted array.
   a = [1,4,8,9]
   b = [2,4,6,20]
   combined = [1,2,4,4,6,8,9,20]
   Median =  4 + 6 / 2 = 5
   a = [2,6,9]
   b = [1,5,8,10]
   combined = [1,2,5,6,8,9,10]
   Median = 6
 */

 function findMedian(a, b) {
     if (a.length > b.length) {
         findMedian(b, a);
     }
     var start = 0;
     var end = a.length;

     while(start < end) {
         var partitionA = Math.floor((start + end) / 2);
         var partitionB = Math.floor(((a.length + b.length + 1) / 2) - partitionA);
         console.log("start: end: partitionA: partitionB: ",start,end,partitionA, partitionB);
         
         var maxLeftA = partitionA === 0 ? -Infinity : a[partitionA-1];
         var minRightA = partitionA === a.length ? Infinity : a[partitionA];

         var maxLeftB = partitionB === 0 ? -Infinity : b[partitionB-1];
         var minRightB = partitionB === b.length ? Infinity : b[partitionB];        
         
         if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
             if ((a.length + b.length) % 2 === 0) {
                 return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
             } else {
                 return Math.max(maxLeftA, maxLeftB);
             }
         } else if (maxLeftA > minRightB) {
             end = end - 1;
         } else if (maxLeftB > minRightA) {
             start = start + 1;
         }
     }
 }

 var a = [1,3,5,6];
 var b = [2,4,7];
 var median = findMedian(a, b);
 console.log("Median : ", median);

 var a = [1,3,5,6];
 var b = [2,4,6,7];
 //combined = [1,2,3,4,5,6,6,7]
 // median = 4 + 5 / 2 = 4.5
 var median = findMedian(a, b);
 console.log("Median : ", median);

 var a = [1,3,5,6];
 var b = [9,10,11];
 //combined = [1,3,5,6,9,10,11]
 // median = 6
 var median = findMedian(a, b);
 console.log("Median : ", median);