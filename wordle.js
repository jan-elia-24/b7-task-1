export default function wordleAlgoritm(guess, secret) {
    if (!guess) return []; // for empty strings

    const result = [];
    const secretLetters = secret.split('');
    const remainingLetters = [...secretLetters];


    // check for right letters
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            result.push({ letter: guess[i], result: 'correct' });
            remainingLetters[i] = null; // Markera som redan använd
        } else {
            result.push({ letter: guess[i], result: 'incorrect' });
        }
    }


    
    return result;
}