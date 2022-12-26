const express = require("express");
const models = require("./models");
const path = require("path");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

const app = express();
// Replace with your mongoLab URI
const MONGO_URI = `mongodb+srv://nika:m6aazAKhXUwegJQR@cluster0.hfei7tw.mongodb.net/?retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error("You must provide a MongoDB URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoDB instance."))
  .on("error", (error) => console.log("Error connecting to MongoDB:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
// app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});
module.exports = app;
