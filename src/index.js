const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    /* constants for regExp to find spaces, 10's, 11's and zeros*/
    const space = /\*{10}/g;
    const ten = /10/g;
    const eleven = /11/g;    
    const zero = /0/g;

    const decodedMsg = [];              // here will be resulting decoded string
    const charLen = expr.length / 10;   // every char has 10 binaries
    const arr = [];                     // intermediary array for splitted binaries    
    
    for (let i = 0; i < charLen; i++) {
      const start = i * 10;
      const end = (i + 1) * 10;
      const subStr = expr.substring(start, end);
      arr.push(subStr);
    }    
    /* we find spaces, 10's, 11's and zeros and replace them to respective chars */
    const resArr = arr.map((char) => char.replace(space, ' ').replace(ten, '.').replace(eleven, '-').replace(zero, ''));    
    resArr.forEach((char) => decodedMsg.push(MORSE_TABLE[char] || ' ')); // add chars or spaces to decoded string
    
    return(decodedMsg.join('')); // join 10's blocks together. Well done!
}

module.exports = {
    decode
}