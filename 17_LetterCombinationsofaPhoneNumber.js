/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map ={
    	"2":['a','b','c'],
    	"3":['d','e','f'],
    	"4":['g','h','i'],
    	"5":['j','k','l'],
    	"6":['m','n','o'],
    	"7":['p','q','r','s'],
    	"8":['t','u','v'],
    	"9":['w','x','y','z']
    };
    var allEle =[];
    for(var i=0;i<digits.length;i++){
    	var ele = digits.charAt(i);
    	allEle.push(map[ele]);
    };
    var result = [];

    for(var j=0;j<allEle[0].length;j++){
    	result.push

    }
    return allEle


};
    console.log(letterCombinations("23"));



