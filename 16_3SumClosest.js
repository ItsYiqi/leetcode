var threeSumClosest = function(nums, target){
	//sort the order of numbers
	nums.sort(function(a,b){
		return a-b;
	})
	console.log(nums);

	var len=nums.length;
	var i=0;
	var result=nums[0]+nums[1]+nums[len-1];
	for(i;i<len-2;i++){
		var lo=i+1;
		var hi=len-1;
		while(lo<hi){
			sum = nums[i]+nums[lo]+nums[hi];
			if(Math.abs(sum-target)<Math.abs(result-target)){
				result=sum;
			}
			while(lo<hi && nums[lo]==nums[lo-1]){
				lo++;
			}
			while(lo<hi && nums[hi]==nums[hi+1]){
				hi--;
			}
			if(sum>0 && )
			if (result==0){
				return result;
			}
		}

	}

	return result;
};

console.log(threeSumClosest([1, 10, 21, 2,-4,-10],2));