const express = require("express"); //laad express in
const bodyParser = require("body-parser"); //laad body-parser in
const cors = require("cors"); //laad CORS in

//laad graphql in en apollo
const {
  graphqlExpress,
  graphiqlExpress
} = require("apollo-server-express");
const {
  makeExecutableSchema
} = require("graphql-tools");

// laad de database config in en laad mongoose in (DAO-achtig => om met objecten te werken)
const dbConfig = require("./config/database.js");
const mongoose = require("mongoose");


//Promises gaan fixen (config setting)
mongoose.Promise = global.Promise;

//connecteer met de database
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Geconnecteerd met de database!");
  })
  .catch(err => {
    console.log("Ola er is een error! Het proces zal stoppen.");
    process.exit();
  });

const app = express(); //nieuwe express app
const PORT = 4000; //graphql database

const typeDefs = require("./schema.gql");
const resolvers = require("./resolvers.js");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

//configureer bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//we gebruiken graphql
app.use("/graphql", bodyParser.json(), graphqlExpress({
  schema
}));
app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql"
}));

//vang de route op (request), begin vanaf de app (home)
//je krijgt request en response binnen
app.get("/", (req, res) => {
  res.json({
    message: "Welkom op onze server"
  });
});

require("./app/routes/workOption.routes.js")(app);

//luister naar de juiste poort
app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});