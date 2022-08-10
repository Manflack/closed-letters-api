import CharClosedRepository from "../../core/repositories/CharClosedRepository";

export default class resetExtendedDatabase {
    private charClosedRepository: CharClosedRepository;

    constructor(charClosedRepository: CharClosedRepository) {
        this.charClosedRepository = charClosedRepository;
    }

    public execute() {
        this.charClosedRepository.resetExtendedDatabase();
    }
}