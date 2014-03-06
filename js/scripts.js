var scrabbleScorer = function(wordInput) {
  var stringToCheck = wordInput.toUpperCase();
  var scoreTotal = 0;
  var letterValues = {'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1,
  'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4,
  'H': 4, 'V': 4, 'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10};

  for (var i = 0; i < wordInput.length; i++) {
      scoreTotal = scoreTotal + letterValues[stringToCheck[i]]
    }
  if(isNaN(scoreTotal) === true) {
    return "invalid"
  } else {
  return scoreTotal;
  }
}

$(document).ready(function() {
  $("form#scrabble").submit(function(event) {
    var word = $("input#word").val();
    var result = scrabbleScorer(word);

     $(".word").text(word);
     $(".scrabbleScore").text(result);


     $("#result").show();
     event.preventDefault();
   });
});
