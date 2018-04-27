//2018-01-23
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var rtn = [];
    if (nums.length < 3) {
        return rtn;
    }
    nums = nums.sort();

    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return rtn;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};


var removeDuplicates = function(inputsArray){
    var stringList=[];
    for(var j = 0;j<inputsArray.length;j++){
        stringList.push(inputsArray[j].join(''));
    }
     var uniqueArray = [];
     var containerA = [];
     for(var i=0;i<inputsArray.length;i++){
        if(containerA.indexOf(stringList[i])==-1){
            containerA.push(stringList[i]);
            uniqueArray.push(inputsArray[i]);
        }
     }
     return uniqueArray;

}


//我的方法尝试了很久都没有试出来。。
var threeSumMe = function(nums) {
    var newNums = nums.sort();
    var len = newNums.length;    
    //var newNums = Array.from(new Set(sortNums));
    var index=0;
    var result = [];
    //console.log(newNums);

    if(newNums[0]==0){
        if(newNums[len-1]==0&&len>=3){
          return [[0,0,0]];
        }else{
          return result;
        }
      
    }
    if(newNums.length<3||newNums[0]>0){
        return result;
    }

    // console.log(newNums);
     console.log(newNums[len-1]);



//用3个for循环来遍历这个数组
    for(index;index<newNums.length-2;index++){
        elem = newNums[index];
        var index1 = index+1;
        if(index==0 || index >0&& newNums[index]!==newNums[index-1]){
            for(index1;index1<newNums.length-1;index1++ ){
             var index2 = index1+1;
           // var sum = nums[index]+nums[index1];
               for(index2;index2<newNums.length;index2++){
                if (newNums[index]+newNums[index1]+newNums[index2] ==0) {
                result.push([ newNums[index],newNums[index1],newNums[index2]]);
             };
           }  
            

        }
        }

        
    }
   
    var final =removeDuplicates(result);
    // newResult= new Set(result);
    return final;

   
};

//console.log(removeDuplicates([ [ -1, 0, 1 ], [ -1, 0, 1 ] ]));

console.log(threeSumMe([-1,0,1,0]));

