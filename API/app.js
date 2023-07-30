var createError = require('http-errors');
var express = require('express');
const cors = require('cors'); 

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var storeBlog = require('./routes/storeBlog');
var getBlogs = require('./routes/getBlogs');
const database = require('./database/sql');


var app = express();
app.use(cors()); 
app.use( (req,res,next) =>{
  res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:3000' );
  res.setHeader( 'Access-Control-Allow-Methods', 'Get','Post','Put','Delete' );
  res.setHeader( 'Access-Control-Allow-Headers', 'Content-Types' );
  next();
} )


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/saveBlog', storeBlog);
app.use('/getBlogs',getBlogs );



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
