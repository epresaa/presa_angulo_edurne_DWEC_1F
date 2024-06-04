export class Candidato {
    // Atributos
    id: number;
    name: string;
    votes: number;

    // Constructor
    constructor(id: number, name: string, votes: number) {
        this.id = id;
        this.name = name;
        this.votes = votes;
    }

    // GETTERS y SETTERS
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getVotes(): number {
        return this.votes;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public setVotes(votes: number): void {
        this.votes = votes;
    }
}