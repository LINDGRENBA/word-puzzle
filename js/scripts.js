$(document).ready(function() {

  $("#sentence-form").submit(function(event) {
    event.preventDefault();

    // get user sentence
    let userSentence = $("#original-sentence").val();
    // create an array of each character in the sentence
    let splitSentence = userSentence.split("");
    // create array to hold new characters once changes have been made
    let newSentence = [];
    // combine the items of the newSentence array into a string


    // check each item in the array, if it's a vowel, replace it with "-" before pushing it to newSentence, otherwise, leave as is and push to newSentence
    splitSentence.forEach(function(character) {
      if((character === "a" || character === "A") || (character === "i" || character === "I") || (character === "e" || character === "E") || (character === "u" || character === "U") || (character === "o" || character === "O")) {
        newSentence.push("-");
      } else {
        newSentence.push(character);
      }
    });
    $(".new-sentence").text(newSentence.join(""));
    $(".result").show();
  });
});