const treinadores = [];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(treinador => treinador.id === parseInt(id));

const createTreinador = (nome, pokemons = []) => {
    const newTreinador = {
        id: treinadores.length + 1,
        nome,
        pokemons: pokemons
    };
    treinadores.push(newTreinador);
    return newTreinador;
};
const updateTreinador = (id, nome, pokemons) => {
    const treinador = getTreinadorById(id);
    if (treinador) {
        treinador.nome = nome;
        treinador.pokemons = pokemons;
    }
    return treinador;
};

module.exports = { getTreinadores, getTreinadorById, createTreinador, updateTreinador };
