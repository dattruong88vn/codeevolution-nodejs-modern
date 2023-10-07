const superhero = require("./super-hero");

console.log(superhero.get());
superhero.set("Superman");
console.log(superhero.get());

const newSuperHero = require("./super-hero");
console.log(newSuperHero.get());
