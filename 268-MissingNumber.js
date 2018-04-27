/**
 * @param {number[]} nums
 * @return {number}
 *
 * Example:
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 */
var missingNumber = function(nums) {
    var sum = 0;
    var len = nums.length;
    for(var i =0;i<len;i++){
      sum = sum+nums[i];
    }
    var supposedSum = (0+len-1)*len/2;
    var differ = sum-supposedSum;
    result = len - differ;
    return result;

};
