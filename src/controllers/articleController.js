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
    .push({
      id: uuid.v4(),
      title,
      body,
      createdAt: new Date().toLocaleString()
    })
    .write();

  res.redirect("/");
};

const editArticle = (req, res) => {
  let { title, body } = req.body;
  db.get("posts")
    .find({ id: req.params.id })
    .assign({ title, body })
    .write();

  res.render("Article.index");
};

const viewArticleForEdit = (req, res) => {
  let post = db.get("posts").find({ id: req.params.id });
  res.render("Article.create", { post: post.toJSON() });
};

const deleteArticle = (req, res) => {
  db.get("posts")
    .remove({ id: req.params.id })
    .write();

  res.redirect("/");
};

module.exports = {
  home,
  create,
  saveArticle,
  deleteArticle,
  getSingleArtile,
  editArticle,
  viewArticleForEdit
};
