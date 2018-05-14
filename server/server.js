const dbConfig = require("./config/database.js");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//graphql
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const cors = require("cors");

//login
const { User } = require("./connectors");
const jwt = require("express-jwt");
const { jwtsecret } = require("./config/");

const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Geconnecteerd met de database!");
  })
  .catch(err => {
    console.log("Ola er is een error! Het proces zal stoppen.");
    process.exit();
  });

const PORT = 4000;

const typeDefs = require("./schema.gql");
const resolvers = require("./resolvers.js");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(cors());
app.use(
  "/graphql",
  bodyParser.json(),
  jwt({ secret: jwtsecret, credentialsRequired: false }),
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user ? User.findById(req.user.id) : Promise.resolve(null)
    }
  }))
);
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.get("/", (req, res) => {
  res.json({
    message: "Welkom op onze server"
  });
});

require("./app/routes/workOption.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
