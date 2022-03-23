module.exports = (app) => {
  var tutorialRoute = require("./turorial.routes");
  var localRoute = require("./local.routes");

  app.use("/api/tutorial", tutorialRoute);
  app.use("/api/local", localRoute);
};
