const express = require('express');

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS setup
const cors = require('cors');
const corsConfig = require('./src/config/corsConfig');

app.use(corsConfig.setHeader);
app.options('*', cors(corsConfig.checkOrigin));
app.use(cors(corsConfig.checkOrigin));

app.get('/test', function (req, res) {
  res.send({test: 'ok'});
});

// router
app.use('/', require('./src/routes/index'));
app.use('/users', require('./src/routes/users'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).end();
});

module.exports = app;
