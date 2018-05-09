const {
  WorkTotal
} = require("./connectors");

module.exports = {
  Query: {
    allWorkTotals() {
      return WorkTotal.find();
    }
  },
  Mutation: {
    addWorkTotals(_, args) {
      return new WorkTotal(args).save();
    }
  }
};