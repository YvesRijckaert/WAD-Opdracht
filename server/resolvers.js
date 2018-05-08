const {
  User,
  Address
} = require("./connectors");

module.exports = {
  Query: {
    allUsers() {
      return User.find();
    },
    allAddresses() {
      return Address.find();
    }
  },
  Mutation: {
    addUser(_, args) {
      return new User(args).save();
    },
    addAddress(_, args) {
      return new Address(args).save();
    }
  }
};