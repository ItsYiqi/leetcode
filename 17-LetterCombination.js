var letterCombinations = function (digits) {
    var len = digits.length;
    var map = ['0', '1', 'abc', 'def', 'ghi',
              'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    
    if(digits.length==0){
        return [];
    }
    if(digits.length==1){
        return map[digits].split('');
    }
    var sum=1;
    for(var a = 0;a<digits.length;a++){
        sum = sum*(map[digits[a]].length);
    }
    console.log(sum);
    var result = new Array(sum);
    console.log(result)
    // var result=[];
    // var str = map[digits[0]];
    // console.log(str);
    // for(var i =0;i<str.length;i++){
    //     result.push(str[i]);
    // }
    // console.log(result);

    for(var j =1;j<digits.length;j++){
        var str0 = map[digits[j]];
        for(var m=0;m<str0.length;m++){
            for(var k =0;k<result.length;k++){
                result.push(result[k]+str0[m]);
            }

        }

    }
    return result;
};

console.log(letterCombinations('23'));