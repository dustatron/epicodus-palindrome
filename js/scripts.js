$(document).ready(function(){

 function checkPalindrome(pal) {
   var palindromes = pal.replace(/ /g,'');
   var reversed = pal.replace(/ /g,'').split('').reverse().join('');
    
   if(reversed == palindromes){
     console.log("true");
   } else {
     console.log("false");
   }
 }

 

  $('button').click(function(event){
    event.preventDefault();
    var input = $('input').val();
    checkPalindrome(input)
  });

});
