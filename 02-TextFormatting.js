/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const intext = readline().trim().toLowerCase();

const result = intext
            .replace(intext.match(/^\w?/g).join(), intext[0].toUpperCase())
            .replace(/\s*,+(\s*,\s*,)?\s*/g, ", ")
            .replace(/\s*\.{1,}\s*/g, ".")
            .replace(/\.([a-z])/g, (match, group) => (". " + group.toUpperCase()))
 
console.log(result);