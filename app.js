var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var genresRouter = require('./routes/genres');
var artistsRouter = require('./routes/artists');
var songsRouter = require('./routes/songs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MAIN ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/genres', genresRouter);
app.use('/artist', artistsRouter);
app.use('/song', songsRouter);

module.exports = app;
