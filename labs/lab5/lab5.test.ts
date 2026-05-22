import { describe, it, expect } from "vitest";
import { Computer } from "./lab5";

  it("конструктор правильно создаёт объект", () => {
    const pc = new Computer("Acer", "Nitro", 512);
    expect(pc.brand).toBe("Acer");
    expect(pc.model).toBe("Nitro");
    expect(pc.getSize()).toBe(512);
  });

  it("setSize работает", () => {
    const pc = new Computer("Dell", "XPS", 256);
    pc.setSize(512);
    expect(pc.getSize()).toBe(512);
  });

  it("getSize работает", () => {
    const pc = new Computer("HP", "Pavilion", 128);
    expect(pc.getSize()).toBe(128);
  });

  it("print исправен", () => {
    const pc = new Computer("Lenovo", "ThinkPad", 256);
    expect(() => pc.print()).not.toThrow();
  });