import { HeroType } from "../core/types.js";
import { Logger } from "../core/logger.js";
import { Hero } from "./Hero.js";

export class Knight extends Hero {
    constructor(name: string, health: number, strength: number) {
        super(HeroType.Knight, name, health, strength, 1);
    }

    useClassAbility(target: Hero): boolean {
        if (!this.isAlive()) return false;
        const damage = Math.ceil(this._strength * 1.3);
        target.takeDamage(damage);
        Logger.log(`${this.describe()} использует Удар возмездия и наносит ${damage} урона ${target.describe()}`);
        return true;
    }

    protected onBeforeReceiveDamage(damage: number, attacker: Hero): number {
        return damage;
    }
}