var repeatChar = function(s,i){
    //求出repeat的index
    var j=0;
    while(i+j<s.length && s[i]===s[i+j]){
        j++;
    }
    return i+j-1;
}

var longestPalindrome = function(s) {
    var len = s.length;
    var subStr ="";    
    
    for(var i = 0;i<len;i++){
        var j = repeatChar(s,i)
        var distance = 0;
        while((i-distance>=0)&&(j+distance<=len)&&(s[i-distance]===s[j+distance])){
            if ((2*distance+j-i+1)>subStr.length){
             subStr = s.substring(i-distance,j+distance+1);   
            }
            distance++;
        }
    }
    return subStr;
    
};

console.log(longestPalindrome("bbbb"));
console.log(repeatChar("bab",1));