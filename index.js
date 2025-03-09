const express = require('express');
const config =  require('config')
const app = express()
const helmet = require('helmet');
const morgan = require('morgan');
const movies = require('./routes/movies')
const home = require('./routes/home')
const  debugStarter = require('debug')('app:startup')
const debugDb = require('debug')('app:db');

 //configuration
 console.log(`Application Name: ${config.get('name')}`)
 console.log(`Mail Server: ${config.get('mail.host')}`)

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(helmet())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api/movies', movies);
app.use('/', home);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debugStarter('enabled...');
}
debugDb('connecting to Database...');

app.listen(3002, console.log(`Listening in port ${3002}...`))