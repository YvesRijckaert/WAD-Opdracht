const { WorkTotal, WorkOption, User } = require("./connectors");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("./config/");

function getAuthenticatedUser(context) {
  return context.user.then(user => {
    if (!user) {
      return Promise.reject("Unauthorized");
    }
    return user;
  });
}

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
    },
    allUsers() {
      return User.find();
    }
  },
  Mutation: {
    addWorkTotals(_, args) {
      return new WorkTotal(args).save();
    },
    login(_, { email, password }, context) {
      console.log("login");
      return User.findOne({
        email
      }).then(user => {
        if (!user || !user.validPassword(password)) {
          return Promise.reject("Invalid username/password");
        } else {
          console.log("login ok");
          const token = jwt.sign(
            {
              id: user._id,
              name: user.name
            },
            jwtsecret
          );
          user.jwt = token;
          context.user = Promise.resolve(user);
          return user;
        }
      });
    },
    register(_, { email, password, name }, context) {
      console.log("register", email, password, name);
      return User.findOne({
        email
      }).then(user => {
        if (!user) {
          return User.create({
            email,
            password,
            name
          })
            .then(user => {
              context.user = Promise.resolve(user);
              return user;
            })
            .catch(err => {
              return Promise.reject("Registration errors" + err.message);
            });
        }
        return Promise.reject("Already exists");
      });
    }
  }
};
