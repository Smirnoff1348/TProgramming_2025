import { Hero } from "../models/Hero.js";
import { Logger } from "../core/logger.js";

export class BattleService {
    static fight(hero1: Hero, hero2: Hero, logger: Logger): Hero {
        Logger.log(`\n${hero1.describe()} vs ${hero2.describe()}`);

        let turn = 0;
        let p1 = hero1;
        let p2 = hero2;

        while (p1.isAlive() && p2.isAlive()) {
            const attacker = turn % 2 === 0 ? p1 : p2;
            const defender = turn % 2 === 0 ? p2 : p1;

            if (attacker.shouldSkipTurn()) {
                Logger.log(`${attacker.describe()} пропускает ход`);
                attacker.resetSkipTurn();
                turn++;
                continue;
            }

            const useAbility = Math.random() < 0.3;
            const useIce = !useAbility && Math.random() < 0.3 && attacker.iceArrowCharges > 0;

            if (useIce) {
                attacker.useIceArrows(defender, logger);
            } else if (useAbility) {
                attacker.useClassAbility(defender, logger);
            } else {
                const damage = attacker.strength;
                defender.receiveDamage(damage, attacker);
                Logger.log(`${attacker.describe()} наносит урон ${damage} ${defender.describe()}`);
            }

            if (!defender.isAlive()) {
                Logger.log(`${defender.describe()} погибает`);
                return attacker;
            }

            p1.onTurnStart(logger);
            p2.onTurnStart(logger);
            turn++;
        }
        return p1.isAlive() ? p1 : p2;
    }

    static tournament(heroes: Hero[], logger: Logger): Hero {
        let round = 1;
        let current = [...heroes];

        while (current.length > 1) {
            Logger.log(`\n=== КОН ${round} ===`);
            const winners: Hero[] = [];
            for (let i = 0; i < current.length; i += 2) {
                winners.push(this.fight(current[i], current[i + 1], logger));
            }
            current = winners;
            round++;
        }

        Logger.log(`\n=== ПОБЕДИТЕЛЬ: ${current[0].describe()} ===`);
        return current[0];
    }
}