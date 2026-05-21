import { Hero } from "./Hero";

export class Knight extends Hero {
    getType(): string {
        return "Рыцарь";
    }

    attack(): number {
        return this.strength;
    }

    useAbility(): { damage: number; skipEnemyTurn: boolean } {
        const damage = Math.floor(this.strength * 1.3);
        return { damage, skipEnemyTurn: false };
    }
}