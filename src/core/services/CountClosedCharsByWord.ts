import CharClosedRepository from "../../core/repositories/CharClosedRepository";

export default class CountClosedCharsByWord {

    private charClosedRepository: CharClosedRepository;

    constructor(charClosedRepository: CharClosedRepository) {
        this.charClosedRepository = charClosedRepository;
    }

    public countChars(inputWord: string, useNormal: boolean): number {
        let closedLetters: number = 0;

        for (var letter of inputWord) {
            var quantity = useNormal ? this.getCharFromNormal(letter): this.getCharFromExtended(letter);
            closedLetters = closedLetters + quantity;
        }
        return closedLetters;
    }

    private getCharFromNormal(letter: string): number {
        return this.charClosedRepository.getCharFromDatabase(letter);
    }

    private getCharFromExtended(letter: string): number {
        return this.charClosedRepository.getCharFromExtendedDatabase(letter);
    }

}