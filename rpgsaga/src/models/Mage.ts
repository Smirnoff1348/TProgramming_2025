import { Logger } from "../core/logger.js";
import { HeroType } from "../core/types.js";
import { Hero } from "./Hero.js";

export class Mage extends Hero {
    constructor(name: string, health: number, strength: number) {
        super(HeroType.Mage, name, health, strength, 1);
    }

    useClassAbility(target: Hero, logger: Logger): boolean {
        if (!this.isAlive()) return false;
        target.setSkipNextTurn(true);
        Logger.log(`${this.describe()} использует Заворожение. ${target.describe()} пропускает ход`);
        return true;
    }

    protected onBeforeReceiveDamage(damage: number, attacker: Hero): number {
        if (attacker.getEffects().some(e => e.getName() === "Ледяные стрелы")) {
            return 0;
        }
        return damage;
    }

    heal(amount: number): void {
        this._health += amount;
    }
}