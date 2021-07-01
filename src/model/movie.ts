import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
});

export const Movie = mongoose.model("Movie", movieSchema);
