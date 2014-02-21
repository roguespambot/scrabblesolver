var scrabbleScorer = function(wordInput) {
  var scoreTotal = 0
  var value1Array = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  var value2Array = ['D', 'G'];
  var value3Array = ['B', 'C', 'M', 'P'];
  var value4Array = ['F', 'H', 'V', 'W', 'Y'];
  var value5Array = ['K'];
  var value8Array = ['J', 'X'];
  var value10Array = ['Q', 'Z'];
  var letterInput = wordInput.toUpperCase().split('');

  for(var i = 0; i < wordInput.length; i++) {
    if(value1Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 1;
    } else if(value2Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 2;
    } else if(value3Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 3;
    } else if(value4Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 4;
    } else if(value5Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 5;
    } else if(value8Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 8;
    } else if(value10Array.indexOf(letterInput[i]) > -1) {
      scoreTotal += 10;
    } else {
      scoreTotal = "invalid."
      break;
      }
    }
  return scoreTotal;
};

$(document).ready(function() {
  $("form#scrabble").submit(function(event) {
    var word = $("input#word").val();
    var result = scrabbleScorer(word);

     $(".scrabbleScore").text(result);

     $("#result").show();
     event.preventDefault();
   });
});
