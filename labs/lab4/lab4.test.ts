import { describe, it, expect } from "vitest";

function computeY(x: number, a: number, b: number, alpha: number): number {
  if (x > 5) {
    const logVal = Math.log10(a * a + x);
    return (logVal * logVal) / ((a + x) * (a + x));
  } else {
    return (a + b * x) ** 3.5 / (1.8 + Math.cos(alpha * x) ** 3);
  }
}

const a = 2.5;
const b = 3.4;
const alpha = 3.5;

  it("x > 5 (6.5)", () => {
    expect(computeY(6.5, a, b, alpha)).toBeCloseTo(0.015088, 5);
  });

  it("x <= 5 (3.4)", () => {
    expect(computeY(3.4, a, b, alpha)).toBeCloseTo(4559.591998, 3);
  });
