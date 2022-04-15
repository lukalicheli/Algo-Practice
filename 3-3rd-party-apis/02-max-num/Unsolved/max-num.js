// Write code to return the largest number in the given array

var maxNum = function(array) {
   let maxNum = array[0];
   array.forEach(element => {
       if (element > maxNum) {
           maxNum = element;
       }
   });
   return maxNum;
};
