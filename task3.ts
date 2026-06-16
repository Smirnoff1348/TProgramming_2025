const a = 2.5;
const b = 3.4;
const alfa = 3.5;

const x = [-2.5, 3.4, 3.5, 6.5, 0.6, 2.89, 3.54, 5.21, 6.28, 3.48];

for (let i = 0; i < x.length; i++) {
    let y;
    if (x[i] > 5) {
        let L = Math.log10(a * a + x[i]);
        y = (L * L) / ((a + x[i]) * (a + x[i]));
    } else {
        let ch = Math.pow(a + b, 3.5);
        let zn = 1.8 + Math.pow(Math.cos(alfa), 3);
        y = ch / zn;
    }
    console.log(x[i].toFixed(2), y.toFixed(6));
}