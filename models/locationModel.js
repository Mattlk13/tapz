var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating taps schema
var destinationSchema = new Schema({


Dposter: {type: String, required:true}, //photo of the destination
Dtitle: {type: String, required:true},//destination title
Daddress: {type: String, required:true},//destination address string
Dlat: {type: String},//destinatoin latitude
Dlon: {type: String},//destination longitude
Dcity: {type: String, required:true},//destination city
Dcounty: {type: String, required:true},//destination county
Dstate: {type: String},//destination state
Dcountry: {type: String, required:true},//destination country
DcurrencyIso: {type: String, required:true},
Dtype: {type: Number},//residential, business
DopeningHour:{type: Number},// destination availability
DclosingHour:{type: Number},// destination availability
DdoorCode:{type: String},// destination door code
DtimeZone: {type: String}


});
//creating  models of a schema objects
var Tap = mongoose.model('Tap', tapSchema);

//exporting models
module.exports = Tap;
