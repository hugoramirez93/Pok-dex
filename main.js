const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

// initial load: show all 151
for (let i = 1; i <= 151; i++) {
	fetch(URL + i)
		.then((response) => response.json())
		.then((data) => mostrarPokemon(data));
}

function mostrarPokemon(poke) {
	let tipos = poke.types
		.map(
			(type) =>
				`<p class="${type.type.name.toLowerCase()} tipo">${type.type.name}</p>`,
		)
		.join("");

	let pokeId = poke.id.toString().padStart(3, "0");

	const div = document.createElement("div");
	div.classList.add("pokemon");
	div.innerHTML = `
    <p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-imagen">
      <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
    <div class="pokemon-info">
      <div class="nombre-contenedor">
        <p class="pokemon-id">#${pokeId}</p>
        <h2 class="pokemon-nombre">${poke.name}</h2>
      </div>
      <div class="pokemon-tipos">
        ${tipos}
      </div>
      <div class="pokemon-stats">
        <p class="stats">${poke.height}m</p>
        <p class="stats">${poke.weight}kg</p>
      </div>
    </div>
  `;
	listaPokemon.append(div);
}

botonesHeader.forEach((boton) =>
	boton.addEventListener("click", (event) => {
		const botonId = event.currentTarget.id;
		listaPokemon.innerHTML = "";

		// If "ver-todos" clicked, show all
		if (botonId === "ver-todos") {
			for (let i = 1; i <= 151; i++) {
				fetch(URL + i)
					.then((response) => response.json())
					.then((data) => mostrarPokemon(data));
			}
			return;
		}

		// Otherwise, show only pokémon that include the selected type
		for (let i = 1; i <= 151; i++) {
			fetch(URL + i)
				.then((response) => response.json())
				.then((data) => {
					const tipos = data.types.map((type) => type.type.name);
					if (tipos.includes(botonId)) {
						mostrarPokemon(data);
					}
				});
		}
	}),
);
