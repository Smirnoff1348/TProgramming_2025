import { Hero } from "./Hero";

export class Archer extends Hero {
    private iceUsed: boolean = false;

    getType(): string {
        return "Лучник";
    }

    attack(): number {
        let bonus = this.iceUsed ? 2 : 0;
        return this.strength + bonus;
    }

    useAbility(): { damage: number; skipEnemyTurn: boolean } {
        this.iceUsed = true;
        return { damage: this.strength, skipEnemyTurn: false };
    }
}