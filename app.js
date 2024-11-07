const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');
const treinadorRoutes = require('./routes/treinadorRoutes');
const pokemonModel = require('./models/pokemonModel');
const treinadorModel = require('./models/treinadorModel');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/pokemon', pokemonRoutes);
app.use('/trainers', treinadorRoutes);

app.get('/', (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const trainers = treinadorModel.getTreinadores();
    res.render('index', { pokemons, trainers });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});