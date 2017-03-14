var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating taps schema
var orderSchema = new Schema({

  OcreatedOn: {type: String, required:true},
  Oowner_id: {type: String, required:true},
  Ostatus: {type: String, required:true},
  Otap_id: {type: String, required:true},
  OdeliveryTo: {type: String, required:true},
  OspecialInstructions: {type: String, required:true},
  OaskSupplierToCall: {type: Boolean, required:true},
  Ocurrency: {type: String, required:true},
  Ovalue: {type: Number, required:true},
  OvalueCurrency: {type: String, required:true}
});
//creating  models of a schema objects
var Order = mongoose.model('Order', tapSchema);

//exporting models
module.exports = Order;
