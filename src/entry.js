export function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.numberOfWords = function() {
  var words = this.text.split(" ");
  return words.length;
};
