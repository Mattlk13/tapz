var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating taps schema
var tapSchema = new Schema({

Tposter: {type: String, required:true},
TorderMethod: {type: String, required:true},
TorderMethodValue: {type: String, required:true},
Ttitle: {type: String, required:true},
Ttext: {type: String, required:true},
Tabout: {type: String, required:true},
Tprice: {type: Number, required:true},
TpriceCurrencyIso: {type: String, required:true},
TpriceCurrencySign: {type: String, required:true},
TdeliveryTime: {type: Number, required:true},
TdeliveryTimeUnit: {type: String, required:true},
TpaymentOptions:[]

});
//creating  models of a schema objects
var Tap = mongoose.model('Tap', tapSchema);

//exporting models
module.exports = Tap;
