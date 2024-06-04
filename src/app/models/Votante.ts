export class Votante {
    // Atributos
    first_name: string;
    last_name: string;
    candidate_id: number;

    // Constructor
    constructor(first_name: string, last_name: string, candidate_id: number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.candidate_id = candidate_id;
    }

    // GETTERS y SETTERS
    public getFirstname(): string {
        return this.first_name;
    }
    public getLastname(): string {
        return this.last_name;
    }
    public getCandidateId(): number {
        return this.candidate_id;
    }
    public setFirstname(first_name: string): void {
        this.first_name = first_name;
    }
    public setLastname(last_name: string): void {
        this.last_name = last_name;
    }
    public setCandidateId(candidate_id: number): void {
        this.candidate_id = candidate_id;
    }
}