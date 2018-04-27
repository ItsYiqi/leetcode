var strStr = function(haystack, needle) {
	if(needle===""){
		return 0;
	}
	if(haystack.length<needle.length){
		return -1;
	}
	var count = 0;
	for(var j=0;j<haystack.length;j++){
		var flag=0;
		var i = haystack.indexOf(needle[0]);
		var m = 0;
		for(m;m<needle.length;m++){
			if(haystack[i]==needle[m]){
				flag++;
				i++;
			}else{
				break;
			}

		}
		//console.log(flag);
		
		if(flag==needle.length){
			return(haystack.indexOf(needle[0])+count);
		}else{
			count +=haystack.indexOf(needle[0])+1;
			haystack=haystack.slice(haystack.indexOf(needle[0])+1);

		}



	}
	return -1;


};

console.log(strStr("mississippi","issip"));