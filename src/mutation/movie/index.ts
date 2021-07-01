import { GraphQLString } from "graphql";
import { Movie } from "../../model/movie";
import { MovieType } from "../../type/movie";

export const ADD_MOVIE = {
  type: MovieType,
  args: {
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    let movie = new Movie({
      name: args.name,
      genre: args.genre,
    });
    return movie.save();
  },
};
