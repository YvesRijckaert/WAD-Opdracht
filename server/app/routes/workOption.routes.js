module.exports = app => {
  const workOptions = require("../controllers/workOption.controller.js");
  app.post("/workOptions", workOptions.create);
  app.get("/workOptions", workOptions.findAll);
  app.get("/workOptions/:workOptionId", workOptions.findOne);
  app.put("/workOptions/:workOptionId", workOptions.update);
  app.delete("/workOptions/:workOptionId", workOptions.delete);
};
