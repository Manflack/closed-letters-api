import invalidCharactersFile from "../../config/onload/InvalidCharacters.json"
import NotValidData from "../exceptions/NotValidData"

const getInvalidChars = () => invalidCharactersFile;

export default class Message {
    data: string;

    constructor(_data: string) {
        this.data = _data;
    }

    validateData(): void {
        for (var character of getInvalidChars()) {
            if (this.data.includes(character)){
                throw new NotValidData("Invalid character");
            }
        }
    }
}

