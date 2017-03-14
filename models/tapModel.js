var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating taps schema
var tapsSchema = new Schema({

});
//creating  models of a schema objects
var Tap = mongoose.model('Tap', tapSchema);

//exporting models
module.exports = Tap;
