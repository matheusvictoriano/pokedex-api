const form = document.getElementById("searchForm");
const input = document.getElementById("pokemonInput");
const mensagem = document.getElementById("mensagem");
const card = document.getElementById("pokemonCard");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); // impede o form de recarregar a página

    const nome = input.value.toLowerCase().trim();
    await buscarPokemon(nome);
});

async function buscarPokemon(nome) {
    mensagem.textContent = "Buscando...";
    card.hidden = true;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        if (!response.ok) {
            throw new Error("Pokémon não encontrado");
        }

        const data = await response.json();
        mostrarPokemon(data);
        mensagem.textContent = "";

    } catch (erro) {
        mensagem.textContent = erro.message;
    }
}

function mostrarPokemon(data) {
    document.getElementById("pokemonNome").textContent = data.name;
    document.getElementById("pokemonId").textContent = data.id;
    document.getElementById("pokemonPeso").textContent = data.weight;
    document.getElementById("pokemonTipo").textContent = data.types
        .map(item => item.type.name)
        .join(", ");

    const imagem = document.getElementById("pokemonImage");
    imagem.src = data.sprites.front_default;
    imagem.alt = `Sprite do ${data.name}`;

    card.hidden = false;
}