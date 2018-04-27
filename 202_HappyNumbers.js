// 2018-4-21
// idea: HashMap, to store the seen element; if the number has seen before then
//       it is not a happy number
var isHappy = function(n) {
    var seen = {};
    seen[n] = true;
    while(true){
        n  = n.toString()
                 .split('')
                 .map(Number)
                 .reduce((acc,val) =>
                 acc+ Math.pow(val,2)
                 ,0);
        console.log(n);
        if(n == 1) return true;
        if(seen[n] == true) return false;
        else seen[n]=true;

    }

};


console.log(isHappy(1111111));
