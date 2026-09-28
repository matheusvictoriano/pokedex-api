const input = document.getElementById("pokemonInput");
const button = document.getElementById("searchButton");

button.addEventListener("click", function() {

    const pokemon = input.value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").textContent = "nome: " + data.name + " id: " + data.id + " peso: " + data.weight;
            console.log(data);
        });

});