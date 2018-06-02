import { Entry } from "./entry.js";
import { getLetterCount, getTeaser } from "./vowels-and-consonants.js";

function addEntry(entry, numOfLetters, teaser) {
  var numberOfVowels = numOfLetters[0];
  var numberOfConsonants = numOfLetters[1];
  $("#entries").append('<div class="panel panel-default">' +
                          '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + entry.title +
                            ': ' + teaser + '</h3>' +
                          '</div>' +
                          '<div class="panel-body">'
                            + entry.text +
                          '</div>' +
                          '<div class="panel-footer">' +
                          '<p>Number of words: ' + entry.numberOfWords() + '</p>' +
                          '<p>Number of vowels: ' + numberOfVowels + '</p>' +
                          '<p>Number of consonants: ' + numberOfConsonants + '</p>' +
                          '</div>' +
                        '</div>');
}

$(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    var title = $("input#journal-title").val();
    var body = $("textarea#journal-body").val();
    var journalEntry = new Entry(title, body);

    var numOfLetters = getLetterCount(journalEntry.text);
    var teaser = getTeaser(journalEntry.text);

    addEntry(journalEntry, numOfLetters, teaser);
  });
});
