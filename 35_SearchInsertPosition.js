var searchInsert = function(nums, target) {
    var i = 0;
    var len = nums.length;
    if(target>=nums[len-1]){
        return len;
    }
    while(i<nums.length-1){
        if(nums[i]==target||nums[i]>target){
            return i;
        }else{
            i++;
        }
    }
      
};

console.log(searchInsert([1,3,5,6],0));