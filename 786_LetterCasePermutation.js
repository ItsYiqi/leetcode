/*
* Given a string S, we can transform every letter individually
* to be lowercase or uppercase to create another string.
* Return a list of all possible strings we could create.
*/

var letterCasePermutation = function(S){
    var result = [""];

    for(var i = 0; i < S.length; i++){
     var permutation = [];
     var c = S.charAt(i);

     if(/[0-9]/.test(c)){
       for(var item of result){
         item = item + c;
         permutation.push(item);
        }
      }
     else {
       for(var item of result){
         var newItem = item.slice();
         var newItem1 = newItem + c.toUpperCase();
         var newItem2 = newItem + c.toLowerCase();
         permutation.push(newItem1);
         permutation.push(newItem2);
        }
     }
     result = permutation;
    }
    return result;
}

console.log(letterCasePermutation('a1b2'));
