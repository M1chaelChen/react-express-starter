const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const CONFIG = require('./config');

const app = express();

// mongoose setup
mongoose.connect(CONFIG.DB, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('MongoDB connected'));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  })
);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// initialize passport
require('./config/passport')();

// custime middleware
app.use((req, res, next) => {
  res.success = data => res.json({ ...data, err: null, success: true });
  return next();
});

// routers
const index = require('./routes/index');

app.use('/', index);

// error handler
app.use((err, req, res, next) => {
  res.json({ err, success: false });
});

module.exports = app;
