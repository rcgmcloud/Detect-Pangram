function isPangram(string){
    var alphaStr = "abcdefghijklmnopqrstuvwxyz";
    var alphaArr = alphaStr.split("");
    var test = string.split("");
    var newTest = [];

    for (var i=0; i<test.length;i++){
      if(test[i] === " " || test[i] === "." || test[i] === "," || isNaN(parseInt(test[i])) === false){
        continue;
      }
      if(newTest.indexOf(test[i]) == -1){
        newTest.push(test[i].toLowerCase());
      }
    }

   newTest.sort();
   for(var j=0; j <alphaArr.length; j++){
     if(newTest[j] !== alphaArr[j]){
       return false;
     }
   }
   return true;
}