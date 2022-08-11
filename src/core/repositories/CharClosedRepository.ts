export default interface CharClosedRepository {
    getCharFromDatabase(_char: string): number;

    getCharFromExtendedDatabase(_char: string): number;

    putCharToExtendedDatabase(_char: string, quantity: number): void;

    resetExtendedDatabase(): void;
}