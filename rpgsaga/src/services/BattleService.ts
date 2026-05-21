import { Hero } from "../models/Hero";
import { LoggerService } from "./LoggerService";

export class BattleService {
    static fight(hero1: Hero, hero2: Hero): Hero {
        LoggerService.log(`\n(${hero1.getType()}) ${hero1.getName()} vs (${hero2.getType()}) ${hero2.getName()}`);
        
        let turn = 0;
        while (hero1.isAlive() && hero2.isAlive()) {
            const attacker = turn % 2 === 0 ? hero1 : hero2;
            const defender = turn % 2 === 0 ? hero2 : hero1;
            
            const useAbility = Math.random() < 0.3;
            let result;
            
            if (useAbility) {
                result = attacker.useAbility();
                if (result.damage > 0) {
                    LoggerService.log(`(${attacker.getType()}) ${attacker.getName()} использует способность и наносит ${result.damage} урона`);
                } else {
                    LoggerService.log(`(${attacker.getType()}) ${attacker.getName()} использует способность`);
                }
            } else {
                const damage = attacker.attack();
                result = { damage, skipEnemyTurn: false };
                LoggerService.log(`(${attacker.getType()}) ${attacker.getName()} наносит ${damage} урона`);
            }
            
            defender.takeDamage(result.damage);
            
            if (!defender.isAlive()) {
                LoggerService.log(`(${defender.getType()}) ${defender.getName()} погибает`);
                return attacker;
            }
            
            if (result.skipEnemyTurn) {
                LoggerService.log(`(${defender.getType()}) ${defender.getName()} пропускает ход`);
                turn++;
            }
            turn++;
        }
        return hero1.isAlive() ? hero1 : hero2;
    }

    static tournament(heroes: Hero[]): Hero {
        let round = 1;
        let players = [...heroes];
        
        while (players.length > 1) {
            LoggerService.log(`\n=== РАУНД ${round} ===`);
            const winners: Hero[] = [];
            for (let i = 0; i < players.length; i += 2) {
                winners.push(this.fight(players[i], players[i + 1]));
            }
            players = winners;
            round++;
        }
        
        LoggerService.log(`\n=== ПОБЕДИТЕЛЬ: (${players[0].getType()}) ${players[0].getName()} ===`);
        return players[0];
    }
}