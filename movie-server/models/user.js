const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    require: true
   
  },
  lastname: {
    type: String,
    require: true
    
  },
  email: {
    type: String,
    require: true
   
  },
  password: {
    type: String,
    require: true
   
  },
 
  phonenumber: {
    type: String,
  },
  billingaddress: {
    type: String,
},
cardnumber:{type:Number},
isAdmin: {
  type: Boolean,
  default: false,
  
}
});

module.exports = mongoose.model("User", userSchema);
