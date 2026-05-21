import { Hero } from "../models/Hero.js";
import { Knight } from "../models/Knight.js";
import { Archer } from "../models/Archer.js";
import { Mage } from "../models/Mage.js";

const NAMES: string[] = ["Артур", "Гэндальф", "Эльдар", "Вильямс", "Леголас", "Арагорн", "Гимли", "Фродо"];

export class HeroFactory {
    static createRandom(count: number): Hero[] {
        const heroes: Hero[] = [];
        for (let i = 0; i < count; i++) {
            const type = Math.floor(Math.random() * 3);
            const name = NAMES[Math.floor(Math.random() * NAMES.length)];
            const health = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 30) + 10;

            let hero: Hero;
            if (type === 0) hero = new Knight(name, health, strength);
            else if (type === 1) hero = new Archer(name, health, strength);
            else hero = new Mage(name, health, strength);

            heroes.push(hero);
        }
        return heroes;
    }
}