import { Hero } from "../models/Hero";
import { Knight } from "../models/Knight";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";

const NAMES: string[] = ["Артур", "Гэндальф", "Эльдар", "Вильямс"];

export class HeroFactory {
    static createKnight(name: string, hp: number, strength: number): Knight {
        return new Knight(name, hp, strength);
    }

    static createArcher(name: string, hp: number, strength: number): Archer {
        return new Archer(name, hp, strength);
    }

    static createMage(name: string, hp: number, strength: number): Mage {
        return new Mage(name, hp, strength);
    }

    static createRandomHeroes(count: number): Hero[] {
        const heroes: Hero[] = [];
        const types = ["Knight", "Archer", "Mage"];
        
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * 3)];
            const name = NAMES[Math.floor(Math.random() * NAMES.length)];
            const hp = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 30) + 10;
            
            if (type === "Knight") {
                heroes.push(this.createKnight(name, hp, strength));
            } else if (type === "Archer") {
                heroes.push(this.createArcher(name, hp, strength));
            } else {
                heroes.push(this.createMage(name, hp, strength));
            }
        }
        return heroes;
    }
}