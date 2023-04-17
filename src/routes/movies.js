const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req, res) => {
    res.json(movies);
});

//vamos son una request post
router.post('/', (req, res) => {
    const {pelicula, director, protagonista} = req.body;

    if (pelicula && director && protagonista) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
        //console.log('Nueva película añadida');
    } else {
        res.status(500).json({error: 'Algo no salió bien'});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {pelicula, director, protagonista} = req.body;
    if (pelicula && director && protagonista) {
        _.each(movies, (movies, i) => {
            if (movies.id == id) {
                movies.pelicula = pelicula;
                movies.director = director;
                movies.protagonista = protagonista;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error: ' Revise bien los campos'})

    }
});


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {

        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });

    //console.log(req.params);
    res.send(movies);
});

module.exports = router;

