const uuid = require("uuid");
const db = require("../utils/db");

const home = (req, res) => {
  let posts = db.get("posts");
  res.render("Article.index", { posts });
};

const getSingleArtile = (req, res) => {
  let post = db.get("posts").find({ id: req.params.id });

  res.render("Article.show", { post: post.toJSON() });
};

const create = (req, res) => {
  res.render("Article.create");
};

const saveArticle = (req, res) => {
  console.log(req.body);
  let { title, body } = req.body;

  db.get("posts")
    .push({ id: uuid.v4(), title, body })
    .write();

  res.redirect("/");
};

const editArticle = (req, res) => {
  create.log(req.body);
  let { title, body } = req.body;
  db.get("posts")
    .find({ id: req.params.id })
    .assign({ title, body })
    .write();

  res.redirect("/");
};

module.exports = { home, create, saveArticle, getSingleArtile, editArticle };
