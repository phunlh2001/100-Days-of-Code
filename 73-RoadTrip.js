// Medium -

class Friend {
  constructor(budget, joy) {
    this.budget = budget
    this.joy = joy
  }
  getJoy() {
    return this.joy
  }
}

let [N, C, P] = readline().split(' ').map(Number)
const friends = []
for (let i = 0; i < N; i++) {
  let [budget, joy] = readline().split(' ').map(Number)
  friends.push(new Friend(budget, joy))
}

let maxJoy = 0
for (let i = 1; i <= N; i++) {
  const perPerson = (C + P * i) / i
  const tmpList = friends
    .filter((f) => f.budget >= perPerson)
    .sort((a, b) => b.joy - a.joy)
    .slice()
  let tmpJoy = 0
  if (tmpList.length >= i - 1) {
    for (let j = 0; j < i - 1; j++) {
      tmpJoy += tmpList[j].getJoy()
    }
  }
  maxJoy = Math.max(tmpJoy, maxJoy)
}

console.log(maxJoy)
