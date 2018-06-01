export function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.numberOfWords = function() {
  var text = this.text;
  if (text.length === 0) {
    return 0;
  }
  var words = text.split(" ");
  return words.length;
};
