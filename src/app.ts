import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import { schema } from "./schema/index";

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c0nff.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("----------------");
  console.log("DBへ接続しました");
  console.log("----------------");
});

const app = express();
app.use(cors());

app.listen(4000, () => {
  console.log("-----------------------");
  console.log("port:4000でnodeが稼働中");
  console.log("-----------------------");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
