const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mongodb-graphql-demo");

const AddressSchema = mongoose.Schema({
  city: String,
  street: String
});

const UserSchema = mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("users", UserSchema);
const Address = mongoose.model("addresses", AddressSchema);

module.exports = {
  User,
  Address
};