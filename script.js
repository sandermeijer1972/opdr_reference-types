let person = {
    name: 'Sander',
    age: 48,
    evaluations: [7, 10, 9]
};
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
console.log(person.evaluations);
// deel 2
let kleur = ['groen', 'blauw', 'rood'];
console.log(kleur);
console.log(kleur.length);
console.log(kleur[0]);
console.log(kleur[kleur.length - 1]);
kleur.push('geel');
console.log(kleur);
kleur.push(5);
console.log(kleur);
kleur.push({greeting: "hi ik ben een object"});
console.log(kleur[kleur.length - 1]);