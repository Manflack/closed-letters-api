import CharClosedRepository from "../../core/repositories/CharClosedRepository";
import Character from "../entities/Character"

export default class SaveCharInteraction {

    private charClosedRepository: CharClosedRepository;

    constructor(charClosedRepository: CharClosedRepository) {
        this.charClosedRepository = charClosedRepository;
    }

    public execute(characters: Array<Character>): void {

        for(var character of characters) {
            character.validateData;
            var char = character.char;
            var quantity = character.quantity;
            this.charClosedRepository.putCharToExtendedDatabase(char, quantity);
        }
    }
}