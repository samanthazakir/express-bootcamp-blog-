const Router = require("express").Router();
const {
  home,
  create,
  saveArticle,
  getSingleArtile,
  editArticle,
  deleteArticle,
  viewArticleForEdit
} = require("../controllers/articleController");

Router.get("/", home);
Router.get("/create", create);
Router.get("/:id", getSingleArtile);
Router.post("/", saveArticle);
Router.get("/edit/:id", viewArticleForEdit);
Router.post("/edit/:id", editArticle);
Router.get("/delete/:id", deleteArticle);

module.exports = Router;
