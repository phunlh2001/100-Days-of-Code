// Medium puzzle

class Frog {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
  }
}

const frogs = [];
for (let i = 0; i < 3; i++) {
  var [x, y, k] = readline().split(" ").map(Number);
  frogs.push(new Frog(x, y, k));
}

function canMeet(f1, f2) {
  const value = gcd(f1.k, f2.k);
  return (
    Math.abs(f1.x - f2.x) % value === 0 && Math.abs(f1.y - f2.y) % value === 0
  );
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (a !== b) {
    if (a > b) a = a - b;
    else b = b - a;
  }
  return a;
}

const flag1 = canMeet(frogs[0], frogs[1]);
const flag2 = canMeet(frogs[1], frogs[2]);
const flag3 = canMeet(frogs[0], frogs[2]);

console.log(flag1 && flag2 && flag3 ? "Possible" : "Impossible");
