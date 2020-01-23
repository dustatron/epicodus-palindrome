$(document).ready(function(){

 function checkPalindrome(pal) {
   if(pal){
     var palindromes = pal.replace(/ /g,'');
     var reversed = pal.replace(/ /g,'').split('').reverse().join('');
      
     if(reversed == palindromes){
      print('true')
     } else {
      print('false')
     }
   } else {
     alert("please enter words");
   }
 }

function print(answer){
  $('#printOut').text(answer)
} 

  $('button').click(function(event){
    event.preventDefault();
    var input = $('input').val();
    checkPalindrome(input)
  });

});
