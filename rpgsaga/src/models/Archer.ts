import { Logger } from "../core/logger.js";
import { HeroType } from "../core/types.js";
import { DamageEffect } from "../effects/DamageEffect.js";
import { Hero } from "./Hero.js";

export class Archer extends Hero {
    private _fireArrowsUsed: boolean = false;

    constructor(name: string, health: number, strength: number) {
        super(HeroType.Archer, name, health, strength, 2);
    }

    useClassAbility(target: Hero, logger: Logger): boolean {
        if (!this.isAlive() || this._fireArrowsUsed) return false;
        this._fireArrowsUsed = true;
        target.applyEffect(new DamageEffect("Огненные стрелы", 2, 999));
        Logger.log(`${this.describe()} использует Огненные стрелы на ${target.describe()}`);
        return true;
    }

    protected onBeforeReceiveDamage(damage: number, attacker: Hero): number {
        return damage;
    }
}