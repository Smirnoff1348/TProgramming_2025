import { describe, expect, it } from "vitest";
import { Knight } from "../src/models/Knight";
import { Archer } from "../src/models/Archer";
import { Mage } from "../src/models/Mage";
import { HeroFactory } from "../src/factories/HeroFactory";
import { BattleService } from "../src/services/BattleService";

describe("Тесты героев", () => {
    it("Рыцарь атакует", () => {
        const knight = new Knight("Тест", 100, 20);
        expect(knight.attack()).toBe(20);
    });

    it("Рыцарь использует способность", () => {
        const knight = new Knight("Тест", 100, 20);
        const result = knight.useAbility();
        expect(result.damage).toBe(26);
    });

    it("Лучник атакует", () => {
        const archer = new Archer("Тест", 100, 15);
        expect(archer.attack()).toBe(15);
    });

    it("Маг атакует", () => {
        const mage = new Mage("Тест", 100, 10);
        expect(mage.attack()).toBe(10);
    });

    it("Маг использует заворожение", () => {
        const mage = new Mage("Тест", 100, 10);
        const result = mage.useAbility();
        expect(result.damage).toBe(0);
        expect(result.skipEnemyTurn).toBe(true);
    });

    it("Урон работает", () => {
        const knight = new Knight("Тест", 100, 20);
        knight.takeDamage(30);
        expect(knight.getHp()).toBe(70);
    });

    it("Смерть при 0 HP", () => {
        const knight = new Knight("Тест", 10, 20);
        knight.takeDamage(10);
        expect(knight.isAlive()).toBe(false);
    });

    it("Фабрика создает героев", () => {
        const heroes = HeroFactory.createRandomHeroes(4);
        expect(heroes.length).toBe(4);
    });

    it("Бой заканчивается победителем", () => {
        const knight = new Knight("A", 100, 20);
        const archer = new Archer("B", 100, 15);
        const winner = BattleService.fight(knight, archer);
        expect(winner.isAlive()).toBe(true);
    });
});