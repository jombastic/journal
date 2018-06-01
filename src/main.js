import { Entry } from "./entry.js";
import { getVowels } from "./vowels-and-consonants.js";

$(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var title = $("input#journal-title").val();
    var body = $("textarea#journal-body").val();
    var journalEntry = new Entry(title, body);
    var numberOfWords = journalEntry.numberOfWords();
    var numberOfVowels = getVowels(journalEntry.text);

    $(".number-of-words").text(numberOfWords);
    $(".number-of-vowels").text(numberOfVowels);
  });
});
