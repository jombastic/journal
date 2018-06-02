import { Entry } from "./entry.js";
import { getLetterCount, getTeaser } from "./vowels-and-consonants.js";

$(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var title = $("input#journal-title").val();
    var body = $("textarea#journal-body").val();
    var journalEntry = new Entry(title, body);
    var numberOfWords = journalEntry.numberOfWords();
    var numOfletters = getLetterCount(journalEntry.text);
    var numberOfVowels = numOfletters[0];
    var numberOfConsonants = numOfletters[1];
    var teaser = getTeaser(journalEntry.text);

    $(".number-of-words").text(numberOfWords);
    $(".number-of-vowels").text(numberOfVowels);
    $(".number-of-consonants").text(numberOfConsonants);
    $(".teaser").text(teaser);
  });
});
