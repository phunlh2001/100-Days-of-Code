const n = parseInt(readline());
const people = []

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const name = inputs[0];
    const parent = inputs[1];
    const birth = parseInt(inputs[2]);
    const death = inputs[3];
    const religion = inputs[4];
    const gender = inputs[5];

    people.push({
        name: name,
        parent: parent,
        birth: birth,
        death: death !== '-' ? parseInt(death) : null,
        religion: religion,
        isFemale: gender === 'F',
        children: []
    })
}

for (const person of people) {
    if (person.parent !== '-') {
        const parent = people.find(p => p.name === person.parent)
        parent.children.push(person)
    }
}

function traverseSuccession(person) {
    let succession = []
    if (!person.death && person.religion === 'Anglican') {
        succession.push(person.name)
    }
    const sortedChildren = person.children.sort((a, b) => {
        if (a.isFemale === b.isFemale) {
            return a.birth - b.birth
        }
        return a.isFemale ? 1 : -1
    });
    for (const child of sortedChildren) {
        succession = succession.concat(traverseSuccession(child))
    }
    return succession
}

const startingPerson = people.find(p => p.parent === '-')

const orderOfSuccession = traverseSuccession(startingPerson)

for (const personName of orderOfSuccession) {
    console.log(personName)
}