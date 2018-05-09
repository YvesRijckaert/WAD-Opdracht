const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/yves-rijckaert-myhours-worktotals");

const WorkTotalSchema = mongoose.Schema({
  name: String,
});

const WorkTotal = mongoose.model("workTotal", WorkTotalSchema);

module.exports = {
  WorkTotal,
};