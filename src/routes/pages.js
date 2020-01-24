const Router = require("express").Router();
const { contactPage, servicesPage } = require("../controllers/pageController");

Router.get("/contact", contactPage);
Router.get("/services", servicesPage);

module.exports = Router;
