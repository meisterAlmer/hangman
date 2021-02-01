const { question } = require('readline-sync');
const { displayWordSoFar, isGameWon, isGameLost } = require('./gamelogic');
let counter = 0;

function game(word, guesses) {
  console.log('Dit heb je tot nu toe geraden: ', displayWordSoFar(word, guesses));
  const letter = question('Raad een letter: ');

  // Tel de foute antwoorden op
  if (!word.includes(letter)) {
    counter++;
  }

  // Laat het aantal foute antwoorden zien
  console.log(`Aantal fouten:`, counter);

  // Laat de juiste galgje graphic zien door fouten counter door te geven
  galgjeGraphic(counter);

  // voeg de geraden letter toe aan de array met guesses als de input 1 letter is
  if (letter.length === 1) {
    guesses.push(letter.toLowerCase());
  }

  // laat waarschuwing zien als het antwoord meer dan 1 letter is
  if (letter.length !== 1) console.log('JE MOET 1 LETTER INVOEREN');

  // De speler heeft gewonnen, laat het goede antwoord zien en stop het spel
  if (isGameWon(word, guesses)) {
    console.log(`JE HEBT GEWONNEN: Het woord was ${word}`);
    return;
  }

  // De speler heeft verloren, laat het goede antwoord zien en stop het spel
  if (isGameLost(word, guesses)) {
    // Laat de laatste graphic zien
    galgjeGraphic(counter);

    console.log(`JE HEBT VERLOREN: Het woord was ${word}`);
    return;
  }

  // volgende ronde! we roepen game nog een keer aan als het spel niet voorbij is
  if (!isGameWon(word, guesses) || !isGameLost(word, guesses)) {
    game(word, guesses);
  }
}

// functie voor het laten zien van de juiste graphic
const galgjeGraphic = function (count) {
  if (count === 0) {
    console.log(`

    |            ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |            ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    |            ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
  `);
  }
  if (count === 1) {
    console.log(`

    |            ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |            ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
  `);
  }
  if (count === 2) {
    console.log(`
    __________
    |            ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |            ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
    `);
  }
  if (count === 3) {
    console.log(`
    __________
    | /          ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |/           ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
    `);
  }
  if (count === 4) {
    console.log(`
    __________
    | /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |/           ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
    `);
  }
  if (count === 5) {
    console.log(`
    __________
    | /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |/      o    ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
    `);
  }
  if (count === 6) {
    console.log(`
    __________
    | /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |            ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |            ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
    `);
  }
  if (count === 7) {
    console.log(`
    __________
    | /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
    |/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
    |       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
    |      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
    |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
    ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
  `);
  }
};

galgjeGraphic(counter);
game('javascript', []);
