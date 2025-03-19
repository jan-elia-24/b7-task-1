import { describe, expect, it } from "@jest/globals";

import wordleAlgoritm from "./wordle";

/*
*Testa koda enligt TDD för första gången.*

Teststrategi:
1. Om strängen är tom, så får man tillbaka en tom sträng.
2. Testa när alla bokstäver är korrekta.
3. Testa när alla bokstäver är inkorrekta.
4. Testa när några bokstäver är misplaced.
*/

describe('wordleAlgoritm()', () => {
    it('empty string gives empty reaction', () => {
        const output = wordleAlgoritm('');
        expect(output).toEqual([]);
    });

    it('should return all letters as correct when guess matches secret', () => {
        const output = wordleAlgoritm('HEJ', 'HEJ');
        expect(output).toEqual([
            { letter: 'H', result: 'correct' },
            { letter: 'E', result: 'correct' },
            { letter: 'J', result: 'correct' }
        ]);
    })

    it('should return the wrong letters as incorrect', () => {
        const output = wordleAlgoritm('HEJ', 'NEJ');
        expect(output).toEqual([
            { letter: 'H', result: 'incorrect' },
            { letter: 'E', result: 'correct' },
            { letter: 'J', result: 'correct' }
        ]);
    })

    it('should handle a mix of correct, misplaced, and incorrect letters', () =>{
        const output = wordleAlgoritm('CRANE', 'REACT');
        expect(output).toEqual([
            { letter: 'C', result: 'misplaced' },
            { letter: 'R', result: 'misplaced' },
            { letter: 'A', result: 'correct' },
            { letter: 'N', result: 'incorrect' },
            { letter: 'E', result: 'misplaced' }
          ])
    })

});
