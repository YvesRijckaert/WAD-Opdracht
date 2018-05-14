const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { dburl } = require("./config/");

mongoose.Promise = global.Promise;

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Succesfully connected to db");
  })
  .catch(err => {
    console.log("Kan niet connecten");
    process.exit();
  });

const WorkTotalSchema = mongoose.Schema({
  _id: String,
  totalDays: Number,
  totalSalary: Number
});

const WorkOptionSchema = mongoose.Schema({
  _id: String,
  name: String,
  location: String,
  startHour: Number,
  endHour: Number,
  salaryPerHour: Number
});

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, index: { unique: true } },
  passwordHash: { type: String, required: true }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

const WorkTotal = mongoose.model("workTotal", WorkTotalSchema);
const WorkOption = mongoose.model("workOption", WorkOptionSchema);
const User = mongoose.model("user", UserSchema);

module.exports = {
  WorkTotal,
  WorkOption,
  User
};
