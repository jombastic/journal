import { Entry } from "./entry.js";

$(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var title = $("input#journal-title").val();
    var body = $("textarea#journal-body").val();
    var journalEntry = new Entry(title, body);
    var numberOfWords = journalEntry.numberOfWords();

    $(".number-of-words").text(numberOfWords);
  });
});
