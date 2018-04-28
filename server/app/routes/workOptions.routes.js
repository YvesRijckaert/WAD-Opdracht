module.exports = app => {
  const tweets = require("../controllers/workHours.controller.js");
  app.post("/workHours", workHours.create);
  app.get("/workHours", workHours.findAll);
  app.get("/workHours/:workHourId", workHours.findOne);
  app.put("/workHours/:workHourId", workHours.update);
  app.delete("/workHours/:workHourId", workHours.delete);
};
