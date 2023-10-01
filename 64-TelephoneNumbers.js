class Node {
  constructor() {
      this.children = new Map()
  }

  add(arr, index) {
      if (!this.children.has(arr[index])) {
          this.children.set(arr[index], new Node())
      }

      if (index < arr.length - 1) {
          this.children.get(arr[index]).add(arr, index + 1)
      }
  }

  countNode() {
      let val = this.children.size
      for (const child of this.children.values()) {
          val += child.countNode()
      }
      return val
  }
}

const N = parseInt(readline());
const root = new Node()

for (let i = 0; i < N; i++) {
  const telephone = readline().split('').map(Number)
  root.add(telephone, 0)
}

console.log(root.countNode())