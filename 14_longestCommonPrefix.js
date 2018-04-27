var longestCommonPrefix = function(strs) {
    // consider special case
    if(strs.length==1){
        return strs[0];
    }
    if(strs.length==0){
        return "";
    }
    
    
    var minIndex = 0;
    var minLengthStr=strs[0];
    // find the minest length index 
    for(var i = 1; i < strs.length;i++){
       if(strs[i].length<minLengthStr.length){
           minIndex=i;
           minLengthStr= strs[i];
       }
    }
    if(minLengthStr.length==0){
        return "";
    }
    
    //注意这个prefix要放在外面，然后k本身就可以当做flag
    var prefixString="";

    for(var j=0;j< minLengthStr.length;j++){
        
        var preString = minLengthStr.substring(0,j+1);
        var k = 0;
        //var flag = 0;
        
        for(k = 0;k<strs.length;k++){
            var eleSubString= strs[k].substring(0,j+1);
            if(eleSubString !== preString){
                break;
            }
        }
        
        if(k === strs.length){
         prefixString = preString;    
        }
        
        
    }
    
    return prefixString;
};

// 注意substring的用法

console.log(longestCommonPrefix(["aa","ab"]));

