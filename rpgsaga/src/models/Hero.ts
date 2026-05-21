export abstract class Hero {
    protected name: string;
    protected hp: number;
    protected strength: number;

    constructor(name: string, hp: number, strength: number) {
        this.name = name;
        this.hp = hp;
        this.strength = strength;
    }

    getName(): string { return this.name; }
    getHp(): number { return this.hp; }
    getStrength(): number { return this.strength; }
    abstract getType(): string;

    isAlive(): boolean {
        return this.hp > 0;
    }

    takeDamage(amount: number): void {
        this.hp = this.hp - amount;
        if (this.hp < 0) this.hp = 0;
    }

    abstract attack(): number;
    abstract useAbility(): { damage: number; skipEnemyTurn: boolean };
}