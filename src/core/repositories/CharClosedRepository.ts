export default interface CharClosedRepository {
    getCharFromDatabase(_char: string): number;

    getCharFromExtendedDatabase(_char: string): number;

    putCharToDatabase(_char: string, quantity: number): void;

    putCharToExtendedDatabase(_char: string, quantity: number): void;
}