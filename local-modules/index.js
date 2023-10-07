const SuperHero = require("./super-hero");

const batman = new SuperHero("batman");
console.log(batman.get());
batman.set("Bruce Wayne");
console.log(batman.get());

const superman = new SuperHero("superman");
console.log(superman.get());
