const mongoose = require("mongoose");

const WorkOptionSchema = mongoose.Schema(
  {
    name: String,
    location: String,
    startHour: Number,
    endHour: Number,
    salaryPerHour: Number
  },
  {
    timestamps: true //automatisch genereerde waarde
  }
);

//exporteren
module.exports = mongoose.model("WorkOption", WorkOptionSchema);
