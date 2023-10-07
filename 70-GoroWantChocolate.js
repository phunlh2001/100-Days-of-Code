// Medium - https://www.codingame.com/training/medium/goro-want-chocolate
var [h, w] = readline().split(' ').map(Number);
let squared;

squared = new Array(h + 1).fill(null).map(() => new Array(w + 1).fill(0));

console.log(calc(h, w));

function calc(h, w) {
  if (h === w) return 1;

  if (squared[h][w] !== 0) return squared[h][w];

  let horizontal = Number.MAX_SAFE_INTEGER;
  let vertical = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= h / 2; i++) {
    horizontal = Math.min(calc(i, w) + calc(h - i, w), horizontal);
  }

  for (let i = 1; i <= w / 2; i++) {
    vertical = Math.min(calc(h, i) + calc(h, w - i), vertical);
  }

  squared[h][w] = Math.min(horizontal, vertical);
  return squared[h][w];
}
