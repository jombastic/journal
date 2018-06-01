export function getVowels(text) {
  var matches = text.match(/[aeiou]/gi);
  return matches === null ? 0 : matches.length;
}
