const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('Mongodb on'))
    .catch(err => console.error(err));
// Settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());
// routes
app.use('tasks', require('./routes/tasks'));
// static files
app.use(express.static(__dirname+'/public'));

// server is listening
app.listen(app.get('port'), () => {
    console.log("server on port " + app.get('port'));
});