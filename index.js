const express = require('express');
const app = express()
const validate = require('./validateGenres');
app.use(express.json());
 
const port = process.env.port || 3000;

let movies = [
    {id: 1, genre: 'Horror'},
    {id: 2, genre: 'Drama'},
    {id: 3, genre: 'Western'},
    {id: 4, genre: 'Romance'},
    {id: 5, genre: 'Science Friction'},
    {id: 6, genre: 'Action'},
    {id: 7, genre: 'Comedy'},
    {id: 8, genre: 'Thriller'},
    {id: 9, genre: 'Adventure'},
]
function findGenre(){
   return movies.find(genre => genre.id === parseInt(req.params.id));
}

app.get('/api/movies/:id', (req, res)=>{
    const genre = findGenre();
    if(!genre) res.status(404).send('Not found!');
    res.send(genre);
});

app.post('/api/movies', (req, res) => {
    const {error} = validate(req.body)
    if(error){
        return res.status(400).send('genre must be a minimum of 3 characters')
    }
    const movie = {
        id: movies.length + 1,
        genre: req.body.genre
    }
    movies = [...movies, movie]
     res.send(movie);
})



app.listen(port, console.log(`Listening in port ${port}...`))