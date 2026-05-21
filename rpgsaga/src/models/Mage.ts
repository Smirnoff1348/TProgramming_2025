import { Hero } from "./Hero";

export class Mage extends Hero {
    private charmUsed: boolean = false;

    getType(): string {
        return "Маг";
    }

    attack(): number {
        return this.strength;
    }

    useAbility(): { damage: number; skipEnemyTurn: boolean } {
        this.charmUsed = true;
        return { damage: 0, skipEnemyTurn: true };
    }
}