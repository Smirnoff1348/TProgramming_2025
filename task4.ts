const a = 2.5;
const b = 3.4;
const alfa = 3.5;

const x = [-2.5, 3.4, 3.5, 6.5, 0.6, 2.89, 3.54, 5.21, 6.28, 3.48];
const y = [];

for (let i = 0; i < x.length; i++) {
    if (x[i] > 5) {
        let L = Math.log10(a * a + x[i]);
        y[i] = (L * L) / ((a + x[i]) * (a + x[i]));
    } else {
        let ch = Math.pow(a + b, 3.5);
        let zn = 1.8 + Math.pow(Math.cos(alfa), 3);
        y[i] = ch / zn;
    }
}

for (let i = 0; i < x.length; i++) {
    console.log(x[i].toFixed(2), y[i].toFixed(6));
}