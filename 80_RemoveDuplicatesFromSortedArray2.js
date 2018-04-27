var removeDuplicates = function(nums) {
      var result = [];
      var i = 0;
      while(i < nums.length){
          var count = i;
          while(nums[i]==nums[i+1]){
            i = i+1;
          }
          //console.log(i);
          if(i - count == 0){
             result.push(nums[i]);
          }
          if(i - count >=1){
            result.push(nums[i]);
            result.push(nums[i]);
          }
          i++;
      }
      return result;

}

console.log(removeDuplicates([1,1,1,2,2,3]));
