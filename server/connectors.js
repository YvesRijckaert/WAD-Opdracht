const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/yves-rijckaert-myhours-worktotals");

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

const WorkTotal = mongoose.model("workTotal", WorkTotalSchema);
const WorkOption = mongoose.model("workOption", WorkOptionSchema);

module.exports = {
  WorkTotal,
  WorkOption
};
