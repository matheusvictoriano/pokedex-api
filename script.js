const input = document.getElementById("pokemonInput");
const button = document.getElementById("searchButton");

button.addEventListener("click", function() {

    const pokemon = input.value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").textContent = 
            "nome: " + data.name + 
            " id: " + data.id + 
            " peso: " + data.weight + 
            " tipo: " + data.types[0].type.name;
            console.log(data);
            console.log(data.types[0].type.name);
            console.log(data.sprites.front_default);
            document.getElementById("pokemonImage").src = data.sprites.front_default;
            document.getElementById("pokemonImage").alt = data.name;
        });

});