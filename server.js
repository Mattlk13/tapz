var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

var bodyParser = require('body-parser');// a package (npm install body-parser) to parse text and to POST
app.use(bodyParser.json());//default when using body-parser
app.use(bodyParser.urlencoded({ extended: false }));//default when using body-parser

var mongoose = require('mongoose');
mongoose.connect('mongodb://3tapz.com/Testing');
// './' - this tells node that we are requiring a "local" module and not something we installed with NPM.
var User = require("./models/userModel");
var Tap = require("./models/tapModel");
var Order = require("./models/orderModel");

app.get('/', function(req, res, next) {
  res.send('Testing Server')
})

//============ API ROUTINGS========================================

//add user to db
app.post('/api/users', function (req, res, next) {
  var user = new User(req.body);//create a new User instance with request.body params
  user.save(function(err, user) {//save to DB
    if (err) {
      console.error(err);
      return next(err);
    } else {
      res.send(user);//send new user
    }
  });
});


//get users list
app.get('/api/users', function (req, res, next) {
  User.find(function (error, users) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(users);
    }
  });
});

//Add tap item to DB
app.post('/api/taps', function (req, res, next) {
  var tap = new Tap(req.body);//create a new Tap item instance with request.body params
  tap.save(function(err, tap) {//save to DB
    if (err) {
      console.error(err);
      return next(err);
    } else {
      res.send(tap);//send new tap item back
    }
  });
});

//get taps item list
app.get('/api/taps', function (req, res, next) {
  Tap.find(function (error, taps) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(taps);
    }
  });
});

//get taps item list
app.get('/api/taps', function (req, res, next) {
  Tap.find(function (error, taps) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(taps);
    }
  });
});

//Add Order to the db
app.post('/api/orders', function (req, res, next) {
  var order = new Order(req.body);//create a new Tap item instance with request.body params
  order.save(function(err, order) {//save to DB
    if (err) {
      console.error(err);
      return next(err);
    } else {
      res.send(order);//send new tap item back
    }
  });
});

//get order list
app.get('/api/orders', function (req, res, next) {
  Order.find(function (error, orders) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(orders);
    }
  });
});




//============ END API ROUTINGS========================================



//============ SERVER ERROR HANDLING ========================================


// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


app.listen(8000, function() {
  console.log("3tapz project. Listening on 8000.")

});

// var express = require('express');
// var app = express();
// var port = 3000;
// app.listen(port);
// console.log('Listening on port: ' + port);
// app.use(express.static('./public'));
