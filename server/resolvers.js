const { WorkTotal, WorkOption } = require("./connectors");

module.exports = {
  Query: {
    allWorkTotals() {
      return WorkTotal.find();
    },
    workTotal(_, args) {
      return WorkTotal.findById(args._id);
    },
    allWorkOptions() {
      return WorkOption.find();
    },
    workOption(_, args) {
      return WorkOption.findById(args._id);
    }
  },
  Mutation: {
    addWorkTotals(_, args) {
      return new WorkTotal(args).save();
    }
  }
};
