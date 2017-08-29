require("./code/load")("code/ancestry.js");

function average(array) {
    function plus(a, b) {return a + b; }
    return array.reduce(plus)/array.length;
}

let ancestry = JSON.parse(ANCESTRY_FILE);
let byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
})

let ageDiffs = [];
for (name in byName)
    if (byName[name].mother in byName)
        ageDiffs.push(byName[name].born - byName[byName[name].mother].born);

console.log(average(ageDiffs));
