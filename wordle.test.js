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
        expect(output).toEqual('');
    });

    it('Test when all letters are correct', () => {
        const output = wordleAlgoritm('hello');
        expect(output).toEqual('hello');
    })
});
