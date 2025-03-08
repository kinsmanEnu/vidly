const express = require('express');
const app = express()
app.use(express.json());

const movies = [
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