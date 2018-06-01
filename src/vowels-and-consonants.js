export function getLetterCount(text) {
  var count = re => (text.match(re) || []).length;
  var vowels = count(/[aeiou]/ig);
  var consonants = count(/[bcdfghjklmnpqrstvxzwy]/ig);

  return [vowels, consonants];
}

export function getTeaser(text) {
  var teaser = text.split(" ").slice(0, 9);
  return teaser.join(" ");
}
