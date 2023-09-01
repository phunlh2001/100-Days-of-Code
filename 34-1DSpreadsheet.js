class Cell {
  constructor() {
      this.operator = ''
      this.value1 = 0
      this.value2 = 0
      this.dependency1 = null
      this.dependency2 = null
      this.isCalc = false
      this.val = 0
  }

  compute() {
      switch (this.operator) {
          case 'VALUE':
              this.val = this.value1
              break
          case 'ADD':
              this.val = this.value1 + this.value2
              break
          case 'SUB':
              this.val = this.value1 - this.value2
              break
          default:
              this.val = this.value1 * this.value2
              break
      }
      this.isCalc = true
  }

  evaluate() {
      if (this.isCalc) return this.val
      if (this.dependency1) this.value1 = this.dependency1.evaluate()
      if (this.dependency2) this.value2 = this.dependency2.evaluate()

      this.compute()
      return this.val  
  }
}

const N = parseInt(readline());
let graph = Array.from({ length: N }, () => new Cell())

for (let i = 0; i < N; i++) {
  const [operator, arg1, arg2] = readline().split` `
  graph[i].operator = operator

  if (arg1[0] === '$') {
      graph[i].dependency1 = graph[parseInt(arg1.substring(1))]
  } else {
      graph[i].value1 = parseInt(arg1)
      graph[i].dependency1 = null
  }

  if (arg2[0] === '$') {
      graph[i].dependency2 = graph[parseInt(arg2.substring(1))]
  } else if (arg2[0] !== '_') {
      graph[i].value2 = parseInt(arg2)
      graph[i].dependency2 = null
  }

  if (!graph[i].dependency1 && !graph[i].dependency2) {
      graph[i].compute()
  }
}

for (let i = 0; i < N; i++) {
  if (graph[i].evaluate() === 0) console.log(Math.abs(graph[i].evaluate()))
  else console.log(graph[i].evaluate())
}