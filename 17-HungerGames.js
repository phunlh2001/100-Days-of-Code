/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Tribute {
    constructor(name) {
        this.name = name
        this.killed = []
        this.killer = null
    }
    setKill(name) {
        this.killed.push(name)
    }
    setKiller(name) {
        this.killer = name
    }
    getMsg() {
        const killed = this.killed.length === 0 ? "None" : this.killed.sort().join(", ")
        const killer = this.killer === null ? "Winner" : this.killer
        return `Name: ${this.name}\nKilled: ${killed}\nKiller: ${killer}`
    }
}

const map = {}
const tributes = parseInt(readline());
for (let i = 0; i < tributes; i++) {
    const playerName = readline();
    map[playerName] = new Tribute(playerName)
}

const turns = parseInt(readline());
for (let i = 0; i < turns; i++) {
    const names = readline().split(" killed ")
    const killer = names[0]
    const victims = names[1].split(", ")

    victims.forEach(victim => {
        map[killer].setKill(victim)
        map[victim].setKiller(killer)
    })
}

const result = []
for (const key of Object.keys(map).sort()) {
    result.push(map[key].getMsg());
}

console.log(result.join("\n\n"))