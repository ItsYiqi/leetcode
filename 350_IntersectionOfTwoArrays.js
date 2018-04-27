/**
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 * Difficulty:Easy
 *
 * Given two arrays, write a function to compute their intersection.
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 * Note:
 * Each element in the result must be unique.
 * The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  var map = {};
  var result = [];
  for(let i = 0; i < nums1.length; i++){
      map[nums1[i]] = (map[nums1[i]]||0) + 1;
  }
  console.log(map);
  for(let i = 0; i < nums2.length; i++){
      if(map[nums2[i]] > 0){
          map[nums2[i]]--;
          result.push(nums2[i]);
      }
  }
  return result;

}
console.log(intersect([1,1,2,3],[3,2,1]));
