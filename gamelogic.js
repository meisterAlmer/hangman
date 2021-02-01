function displayWordSoFar(word, guesses) {
  output = '';
  wordArray = word.split('');
  // if guesses includes current word letter -> add letter to output
  for (let i = 0; i < wordArray.length; i++) {
    if (guesses.includes(wordArray[i])) output += wordArray[i] + ' ';
    if (!guesses.includes(wordArray[i])) output += '_ ';
  }
  return output;
}

function isGameWon(word, guesses) {
  let counter = 0;
  wordArray = word.split('');
  // check for each letter in word if guessed right, when true increase counter by 1
  for (let i = 0; i < wordArray.length; i++) {
    if (guesses.includes(wordArray[i])) counter++;
  }
  if (counter === word.length) return true;
  if (counter !== word.length) return false;
}

function isGameLost(word, guesses) {
  let counterWrong = 0;
  // Check if each guesses letter is wrong, then increase counter by 1
  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i])) counterWrong++;
  }
  if (counterWrong >= 7) return true;
  if (counterWrong < 7) return false;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
