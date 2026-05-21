export class DamageEffect {
    private name: string;
    private damagePerTurn: number;
    private duration: number;
    private remainingTurns: number;

    constructor(name: string, damagePerTurn: number, duration: number) {
        this.name = name;
        this.damagePerTurn = damagePerTurn;
        this.duration = duration;
        this.remainingTurns = duration;
    }

    getName(): string {
        return this.name;
    }

    isExpired(): boolean {
        return this.remainingTurns <= 0;
    }

    apply(): number {
        this.remainingTurns--;
        return this.damagePerTurn;
    }

    getRemainingTurns(): number {
        return this.remainingTurns;
    }
}