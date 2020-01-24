const Router = require("express").Router();

Router.use("/articles", require("./articles"));
Router.all("/", (req, res) => {
  res.redirect("/articles");
});
Router.all("*", (req, res) => {
  res.render("pages.404");
});

module.exports = Router;
