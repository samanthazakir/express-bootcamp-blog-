const Router = require("express").Router();
const {
  home,
  create,
  saveArticle,
  getSingleArtile,
  editArticle
} = require("../controllers/articleController");

Router.get("/", home);
Router.get("/create", create);
Router.get("/:id", getSingleArtile);
Router.post("/", saveArticle);
Router.post("/edit/:id", editArticle);

module.exports = Router;
