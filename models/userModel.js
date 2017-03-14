var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Generate new Schema object
var userSchema = new Schema({
  UfirstName: {type: String, required},
  UlastName: {type: String, required},
  UscreenName: {type: String},
  UcompanyName: {type: String},
  UcompanyFloor: {type: String},
  UlocationSpecialInstructions: {type: String},
  UmPhoneCountry: {type: Number, required},
  UmPhoneNumber: {type: Number, required},
  UmPhoneConfirmed: {type: Boolean},
  UmPhoneConfirmedDate: {type: String},
  UisCustomer: {type: Boolean},
  UisMerchant: {type: Boolean},
  UshippingAddress: {type: String},
  UprofilePhoto: {type: String},
  UcurrenLocationLong: {type: String},
  UcurrenLocationLat: {type: String},
  UcurrenLocationCity: {type: String},
  UcurrenLocationState: {type: String},
  UcurrenLocationCountry: {type: String},
  UcurrenLocationZip: {type: String},
  Upasswd: {type: String},
  Uemail: {type: String},
  UemailConfirmed: {type: String},
  UemailConfirmedDate: {type: String}
  Usince: {type: String},
  Ukey:{type: String}

});



//creating  models of a schema objects
var User = mongoose.model('User', userSchema);


//exporting models
module.exports = User;
