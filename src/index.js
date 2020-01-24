const express = require("express");

const app = express();

const db = require("./utils/db");

const { config, engine } = require("express-edge");
config({ cache: process.env.NODE_ENV === "production" });

app.use(engine);
app.set("views", `${__dirname}/views`);

app.use(express.static("public"));

app.use(express.urlencoded());
app.use(express.json());

app.listen();

app.use(require("./routes"));
