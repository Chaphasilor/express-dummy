const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var app = module.exports = express();

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']}));

// app.use('/', indexRouter);
app.get('/hi', (req, res, next) => res.send('test'));
app.use('/api/', apiRouter);