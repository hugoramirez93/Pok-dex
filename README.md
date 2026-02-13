I'll create a concise README.md for the Pokedex project and paste the content below — tell me if you want me to write it into the repo.

# Pokedex

Simple Pokédex showing the first 151 Pokémon using the PokeAPI.

**Files**
- [Pokedex/index.html](Pokedex/index.html) — UI and type buttons
- [Pokedex/main.js](Pokedex/main.js) — data fetching and filtering
- styles.css and img/ — styling and assets

## Prerequisites
- Modern browser
- (Optional) Local static server for best results:
```bash

Setup
Open the project folder.
Serve the folder or open Pokedex/index.html in your browser.
Usage
Click a type button (e.g., fire, water, grass) to filter Pokémon by that type.
Click Ver todos to show all 151 Pokémon again.
The app fetches data from https://pokeapi.co/api/v2/pokemon/{id} for ids 1–151.
Notes & Troubleshooting
If type buttons don't respond, ensure the buttons have the .btn-header class and correct id (e.g., fire, water). See Pokedex/index.html.
Filtering currently fetches each Pokémon on every click. For faster filtering, cache the initial fetch results in memory (an array of Pokémon objects) and filter that array instead of re-fetching.
Suggested Improvement (quick)
Load all Pokémon once into allPokemon array, then:
Render allPokemon to show all items.
Filter allPokemon on type button click and render the filtered results.
This reduces network load and makes UI instant after initial load.
