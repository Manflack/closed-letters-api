import CharClosedRepository from "../../core/repositories/CharClosedRepository";

export default class CountClosedCharsByWord {

    private charClosedRepository: CharClosedRepository;

    constructor(charClosedRepository: CharClosedRepository) {
        this.charClosedRepository = charClosedRepository;
    }

    public countChars(inputWord: string): number {
        let closedLetters: number = 0;

        for (var letter of inputWord) {
            var quantity = this.charClosedRepository.getCharFromDatabase(letter);
            closedLetters = closedLetters + quantity;
        }
        return closedLetters;
    }

}