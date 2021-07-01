import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export const DirectorModel = mongoose.model("Director", directorSchema);
