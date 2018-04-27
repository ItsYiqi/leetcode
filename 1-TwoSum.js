/*
Given an array of integers, return indices of the
two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

/*
* @Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 这个算什么 hashmap吧， 一次遍历就可以获得答案

var twoSum = function(nums, target) {
  var a=[];
  for(var i=0, len=nums.length;i<len;i++){
    var tem = target- nums[i];
    if(a[tem]!==undefined) return [a[tem],i];
    a[nums[i]]=i;

  }

};

//brute force
var twoSum = function(nums,target){
  for(var i =0;i<nums.length;i++){
    var tem= target- nums[i];
    for(var j=i+1;j<nums.length;j++){
      if(tem==nums[j]) return [i,j];
    }
  }

}
