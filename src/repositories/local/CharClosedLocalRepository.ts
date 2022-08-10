import CharClosedRepository from "../../core/repositories/CharClosedRepository";
import charClosedPreset from "../../config/onload/CharClosedPreset.json"

const getEntries = () => charClosedPreset;

let DATABASE = new Map<string, number>();
let EXTENDED_DATABASE = new Map<string, number>();

export default class CharClosedLocalRepository implements CharClosedRepository {

    constructor() {
        const dataset = getEntries().dataset;
        console.log("Preloading all resources...");

        Object.entries(dataset).forEach(data => {
            const [key, value] = data;
            DATABASE.set(key, value);
            EXTENDED_DATABASE.set(key, value);
        });
        console.log("Resources loaded.")
    }

    public getCharFromDatabase(_char: string): number {
        var value = DATABASE.get(_char);
        if(value === undefined)
            return 0;
        return value;
    }

    public getCharFromExtendedDatabase(_char: string): number {
        var value = EXTENDED_DATABASE.get(_char);
        if(value === undefined)
            return 0;
        return value;
    }

    public putCharToExtendedDatabase(_char: string, quantity: number): void {
        EXTENDED_DATABASE.set(_char, quantity);
    }
}