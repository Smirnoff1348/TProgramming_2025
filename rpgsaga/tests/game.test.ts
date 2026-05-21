import { describe, expect, it, beforeEach } from "vitest";
import { Logger } from "../src/core/logger.js";
import { Knight } from "../src/models/Knight.js";
import { Archer } from "../src/models/Archer.js";
import { Mage } from "../src/models/Mage.js";
import { BattleService } from "../src/services/BattleService.js";

describe("Тесты героев", () => {
    beforeEach(() => {
        Logger.clear();
    });

    it("Рыцарь создаётся", () => {
        const k = new Knight("Артур", 100, 25);
        expect(k.name).toBe("Артур");
    });

    it("Лучник создаётся", () => {
        const a = new Archer("Леголас", 100, 20);
        expect(a.name).toBe("Леголас");
    });

    it("Маг создаётся", () => {
        const m = new Mage("Гэндальф", 100, 15);
        expect(m.name).toBe("Гэндальф");
    });
});

describe("Тесты способностей", () => {
    it("Рыцарь: Удар возмездия", () => {
        const k = new Knight("Артур", 100, 25);
        const target = new Mage("Гэндальф", 100, 15);
        k.useClassAbility(target);
        expect(target.health).toBeLessThan(100);
    });

    it("Маг: Заворожение", () => {
        const m = new Mage("Гэндальф", 100, 15);
        const target = new Knight("Артур", 100, 25);
       m.useClassAbility(target, Logger);
        expect(target.shouldSkipTurn()).toBe(true);
    });
});