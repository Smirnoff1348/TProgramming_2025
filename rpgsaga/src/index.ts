export class Hero {
    name: string;
    hp: number;
    strength: number;
    type: string;

    constructor(name: string, hp: number, strength: number, type: string) {
        this.name = name;
        this.hp = hp;
        this.strength = strength;
        this.type = type;
    }

    isAlive(): boolean {
        return this.hp > 0;
    }

    takeDamage(amount: number): void {
        this.hp = this.hp - amount;
    }

    attack(): number {
        return this.strength;
    }
}

export class Knight extends Hero {
    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength, "Рыцарь");
    }

    useAbility(): number {
        return Math.floor(this.strength * 1.3);
    }
}

export class Archer extends Hero {
    iceUsed: boolean = false;

    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength, "Лучник");
    }

    useAbility(): number {
        this.iceUsed = true;
        return this.strength;
    }

    attack(): number {
        let bonus = this.iceUsed ? 2 : 0;
        return this.strength + bonus;
    }
}

export class Mage extends Hero {
    charmUsed: boolean = false;

    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength, "Маг");
    }

    useAbility(): boolean {
        this.charmUsed = true;
        return true;
    }
}

export let gameLog: string[] = [];

export function addLog(msg: string): void {
    gameLog.push(msg);
    console.log(msg);
}

const names = ["Артур", "Гэндальф", "Эльдар", "Вильямс"];

export function createRandomHeroes(count: number): any[] {
    let heroes: any[] = [];
    let types = ["Knight", "Archer", "Mage"];
    
    for (let i = 0; i < count; i++) {
        let type = types[Math.floor(Math.random() * 3)];
        let name = names[Math.floor(Math.random() * names.length)];
        let hp = Math.floor(Math.random() * 100) + 50;
        let str = Math.floor(Math.random() * 30) + 10;
        
        if (type === "Knight") {
            heroes.push(new Knight(name, hp, str));
        } else if (type === "Archer") {
            heroes.push(new Archer(name, hp, str));
        } else {
            heroes.push(new Mage(name, hp, str));
        }
    }
    return heroes;
}

export function fight(hero1: any, hero2: any): any {
    addLog(`\n${hero1.type} ${hero1.name} vs ${hero2.type} ${hero2.name}`);
    
    let turn = 0;
    while (hero1.isAlive() && hero2.isAlive()) {
        let attacker = turn % 2 === 0 ? hero1 : hero2;
        let defender = turn % 2 === 0 ? hero2 : hero1;
        
        let random = Math.random();
        let damage = 0;
        let skip = false;
        
        if (random < 0.3 && attacker.type === "Рыцарь") {
            damage = (attacker as Knight).useAbility();
            addLog(`${attacker.type} ${attacker.name} использует Удар возмездия и наносит ${damage} урона`);
        } else if (random < 0.3 && attacker.type === "Лучник") {
            damage = (attacker as Archer).useAbility();
            addLog(`${attacker.type} ${attacker.name} использует Ледяные стрелы`);
        } else if (random < 0.3 && attacker.type === "Маг") {
            skip = (attacker as Mage).useAbility();
            addLog(`${attacker.type} ${attacker.name} использует Заворожение`);
        } else {
            damage = attacker.attack();
            addLog(`${attacker.type} ${attacker.name} наносит ${damage} урона`);
        }
        
        if (damage > 0) {
            defender.takeDamage(damage);
        }
        
        if (!defender.isAlive()) {
            addLog(`${defender.type} ${defender.name} погибает`);
            return attacker;
        }
        
        if (skip) {
            addLog(`${defender.type} ${defender.name} пропускает ход`);
            turn++;
        }
        turn++;
    }
    return hero1.isAlive() ? hero1 : hero2;
}

export function tournament(heroes: any[]): any {
    let round = 1;
    let players = [...heroes];
    
    while (players.length > 1) {
        addLog(`\n=== РАУНД ${round} ===`);
        let winners: any[] = [];
        for (let i = 0; i < players.length; i += 2) {
            let winner = fight(players[i], players[i + 1]);
            winners.push(winner);
        }
        players = winners;
        round++;
    }
    
    addLog(`\n=== ПОБЕДИТЕЛЬ: ${players[0].type} ${players[0].name} ===`);
    return players[0];
}

let heroes = createRandomHeroes(4);
tournament(heroes);