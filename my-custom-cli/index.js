#!/usr/bin/env node
const yargs = require("yargs");
const { argv } = yargs;

console.log(argv.pokemon);

async function fetchMoves(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await response.json();
  console.log(data.moves.slice(0, 5).map((item) => ({ name: item.move.name })));
}

fetchMoves(argv.pokemon);
