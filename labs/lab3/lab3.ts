{
  const a = 2.5;
  const b = 3.4;
  const alpha = 3.5;

  const x = [-2.5, 3.4, 3.5, 6.5, 0.6, 2.89, 3.54, 5.21, 6.28, 3.48];

  for (let i = 0; i < x.length; i++) {
    let y;
    if (x[i] > 5) {
      const L = Math.log10(a * a + x[i]);
      y = (L * L) / ((a + x[i]) * (a + x[i]));
    } else {
      y = (a + b * x[i]) ** 3.5 / (1.8 + Math.cos(alpha * x[i]) ** 3);
    }
    console.log(x[i].toFixed(2), y.toFixed(6));
  }
}