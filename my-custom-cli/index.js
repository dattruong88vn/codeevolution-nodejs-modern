#!/usr/bin/env node

const inquirer = require("inquirer");

async function fetchMoves(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await response.json();
  console.log(data.moves.slice(0, 5).map((item) => ({ name: item.move.name })));
}

const promt = inquirer.createPromptModule();
promt([
  { type: "input", name: "pokemon", message: "Enter pokemon name:" },
]).then((answer) => {
  fetchMoves(answer.pokemon);
});
