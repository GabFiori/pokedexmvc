const treinadorModel = require('../models/trainerModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTreinadores = (req, res) => {
    const trainers = treinadorModel.getTreinador();
    res.render('Treinadores', { trainers });
};

const createTreinador = (req, res) => {
    const { nome, pokemons } = req.body;
    const pokemonIds = Array.isArray(pokemons) ? pokemons.map(id => parseInt(id)) : [];
    const ownedPokemons = pokemonIds.map(id => pokemonModel.getPokemonById(id)).filter(pokemon => pokemon);

    treinadorModel.createTreinador(nome, ownedPokemons);
    res.redirect('/treinadores');
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    const pokemons = pokemonModel.getPokemons();
    if (treinador) {
        res.render('treinador', { treinador, pokemons });
    } else {
        res.status(404).send('Treinador não encontrado!');
    }
};

const editTreinador = (req, res) => {
    const { nome, pokemons } = req.body;
    const pokemonIds = Array.isArray(pokemons) ? pokemons.map(id => parseInt(id)) : [];
    const updatedPokemons = pokemonIds.map(id => pokemonModel.getPokemonById(id)).filter(pokemon => pokemon);

    trainadorModel.updateTreinador(req.params.id, nome, updatedPokemons);
    res.redirect('/treinadores');
};

module.exports = { getAllTreinadores, createTreinador, getTreinador, editTreinador };
