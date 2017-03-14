var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Generate new Schema object
var userSchema = new Schema({

});

//creating  models of a schema objects
var User = mongoose.model('User', userSchema);


//exporting models
module.exports = User;
