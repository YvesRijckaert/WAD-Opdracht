const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/yves-rijckaert-myhours-worktotals");

const WorkTotalSchema = mongoose.Schema({
  _id: String,
  totalDays: Number,
  totalSalary: Number
});

// const WorkOption = {
//   getOne() {
//     return fetch("http://localhost:4000/workOptions")
//       .then(res => res.json())
//       .then(res => {
//         return res[0];
//       });
//   }
// };

const WorkTotal = mongoose.model("workTotal", WorkTotalSchema);

module.exports = {
  WorkTotal
};
