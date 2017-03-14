var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating taps schema
var tapSchema = new Schema({

Tposter: {type: String, required},
TorderMethod: {type: String, required},
TorderMethodValue: {type: String, required},
Ttitle: {type: String, required},
Ttext: {type: String, required},
Tabout: {type: String, required},
Tprice: {type: Number, required},
TpriceCurrencyIso: {type: String, required},
TpriceCurrencySign: {type: String, required},
TdeliveryTime: {type: Number, required},
TdeliveryTimeUnit: {type: String, required},
TpaymentOptions:[]

});
//creating  models of a schema objects
var Tap = mongoose.model('Tap', tapSchema);

//exporting models
module.exports = Tap;
