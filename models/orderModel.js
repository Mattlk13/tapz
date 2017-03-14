var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating taps schema
var orderSchema = new Schema({

  OcreatedOn: {type: String, required},
  Oowner_id: {type: String, required},
  Ostatus: {type: String, required},
  Otap_id: {type: String, required},
  OdeliveryTo: {type: String, required},
  OspecialInstructions: {type: String, required},
  OaskSupplierToCall: {type: Boolean, required},
  Ocurrency: {type: String, required},
  Ovalue: {type: Number, required},
  OvalueCurrency: {type: String, required}
});
//creating  models of a schema objects
var Order = mongoose.model('Order', tapSchema);

//exporting models
module.exports = Order;
