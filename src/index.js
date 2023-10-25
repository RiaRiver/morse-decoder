const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const transformDict = { '.': '10', '-': '11' };
  const transformKey = (key) => key.replace(/(.)|(-)/g, (m) => transformDict[m]).padStart(10, '0');
  const MORSE_DICT = Object.fromEntries(
    Object.entries(MORSE_TABLE).map(
      (entry) => [transformKey(entry[0]), entry[1]],
    ),
  );

  const space = '**********';

  return expr.replace(/(\d{10})/g, (m) => MORSE_DICT[m])
    .replaceAll(space, ' ');
}

module.exports = {
  decode,
};
