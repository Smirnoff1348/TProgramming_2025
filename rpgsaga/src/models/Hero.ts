import { HeroType } from "../core/types.js";
import { Logger } from "../core/logger.js";
import { DamageEffect } from "../effects/DamageEffect.js";

export abstract class Hero {
    protected _name: string;
    protected _health: number;
    protected _strength: number;
    protected _type: HeroType;
    protected _skipNextTurn: boolean = false;
    protected _effects: DamageEffect[] = [];
    protected _iceArrowCharges: number;

    constructor(type: HeroType, name: string, health: number, strength: number, iceArrowCharges: number) {
        this._type = type;
        this._name = name;
        this._health = health;
        this._strength = strength;
        this._iceArrowCharges = iceArrowCharges;
    }

    get name(): string { return this._name; }
    get health(): number { return this._health; }
    get strength(): number { return this._strength; }
    get type(): HeroType { return this._type; }
    get iceArrowCharges(): number { return this._iceArrowCharges; }

    isAlive(): boolean { return this._health > 0; }

    describe(): string {
        return `(${this._type}) ${this._name}`;
    }

    takeDamage(amount: number): void {
        this._health -= amount;
        if (this._health < 0) this._health = 0;
    }

   receiveDamage(damage: number, attacker: Hero): void {
    const finalDamage = this.onBeforeReceiveDamage(damage, attacker);
    if (finalDamage > 0) {
        this.takeDamage(finalDamage);
    }
}

    applyEffect(effect: DamageEffect): void {
        this._effects.push(effect);
    }

    getEffects(): DamageEffect[] {
        return [...this._effects];
    }

    clearEffects(): void {
        this._effects = [];
    }

    onTurnStart(logger: Logger): void {
        for (const effect of this._effects) {
            const damage = effect.apply();
            this.takeDamage(damage);
            Logger.log(`${this.describe()} получает ${damage} урона от ${effect.getName()}`);
        }
        this._effects = this._effects.filter(e => !e.isExpired());
    }

    setSkipNextTurn(value: boolean): void {
        this._skipNextTurn = value;
    }

    shouldSkipTurn(): boolean {
        return this._skipNextTurn;
    }

    resetSkipTurn(): void {
        this._skipNextTurn = false;
    }

    useIceArrows(target: Hero, logger: Logger): boolean {
        if (!this.isAlive() || this._iceArrowCharges <= 0) {
            return false;
        }
        this._iceArrowCharges--;
        target.applyEffect(new DamageEffect("Ледяные стрелы", 2, 3));
        Logger.log(`${this.describe()} использует Ледяные стрелы на ${target.describe()}`);
        return true;
    }

    abstract useClassAbility(target: Hero, logger: Logger): boolean;
    protected abstract onBeforeReceiveDamage(damage: number, attacker: Hero): number;
}