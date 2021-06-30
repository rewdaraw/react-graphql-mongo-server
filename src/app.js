require("dotenv").config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c0nff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("----------------");
  console.log("DBへ接続しました");
  console.log("----------------");
});

app.use("/graphql", () => {
  graphqlHTTP({
    
  });
});
app.listen(4000, () => {
  console.log("-----------------------");
  console.log("port:4000でnodeが稼働中");
  console.log("-----------------------");
});
