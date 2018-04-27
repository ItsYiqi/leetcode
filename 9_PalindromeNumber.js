var isPalindrome = function(x) {
    var init =x;
    if(x<0) {return false;}
    var rev = 0;
    var i = x/10;
    if(i<1) {return true;}
    while(x){
        // 最开始为个位数,余数为个位数
        rev = rev*10+x%10;
        // 除以10后，十位数进到个位数,取商值
        x = Math.floor(x/10);
    }
    return rev==init;
};

var isPalindrome1 = function(x){
    //var rev="";
    var rev = x.toString().split('').reverse().join('');
    return rev==x;
}


console.log(isPalindrome1(121));