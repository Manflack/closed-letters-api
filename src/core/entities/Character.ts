import invalidCharactersFile from "../../config/onload/InvalidCharacters.json"
import NotValidData from "../exceptions/NotValidData"

const getInvalidChars = () => invalidCharactersFile;

export default class Character {
    char: string;
    quantity: number;

    constructor(_char: string, _quantity: number) {
        this.char = _char;
        this.quantity = _quantity;
    }

    validateData(): void {

        if(isNaN(this.quantity))
            throw new NotValidData("Invalid quantity")

        for (var character of getInvalidChars()) {
            if (this.char.includes(character)){
                throw new NotValidData("Invalid character");
            }
        }
    }
}
