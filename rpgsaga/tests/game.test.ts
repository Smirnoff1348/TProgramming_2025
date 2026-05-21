// tests/game.test.ts
import { describe, expect, it } from "vitest";
import { Knight, Archer, Mage, createRandomHeroes, fight } from "../src/index";

    it("Рыцарь атакует", () => {
        let k = new Knight("Тест", 100, 20);
        expect(k.attack()).toBe(20);
    });

    it("Лучник атакует", () => {
        let a = new Archer("Тест", 100, 15);
        expect(a.attack()).toBe(15);
    });

    it("Маг атакует", () => {
        let m = new Mage("Тест", 100, 10);
        expect(m.attack()).toBe(10);
    });

    it("Фабрика создает 4 героев", () => {
        let h = createRandomHeroes(4);
        expect(h.length).toBe(4);
    });
