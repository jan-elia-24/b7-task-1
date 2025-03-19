export default function wordleAlgoritm(guess, secret) {
    if (!guess) return []; // for empty strings

    const result = [];
    const secretLetters = secret.split('');
    const remainingLetters = [...secretLetters];// for already used letters


    // check for right & wrong letters
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            result.push({ letter: guess[i], result: 'correct' });
            remainingLetters[i] = null; // Mark as already used
        } else {
            result.push({ letter: guess[i], result: 'incorrect' });
        }
    }

    //check for the misplaced letters
    for (let i = 0; i < guess.length; i++) {
        if (result[i].result === 'incorrect') {
            const index = remainingLetters.indexOf(guess[i]);
            if (index !== -1) {
                result[i].result = 'misplaced';
                remainingLetters[index] = null; // Mark as already used
            }
        }
    }

    return result;
}