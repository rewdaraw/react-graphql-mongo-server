import { GraphQLString, GraphQLID, GraphQLNonNull } from "graphql";
import { Movie } from "../../model/movie";
import { MovieType } from "../../type/movie";

export const ADD_MOVIE = {
  type: MovieType,
  args: {
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    directorId: { type: GraphQLID },
  },
  resolve(parent: any, args: any) {
    let movie = new Movie({
      name: args.name,
      genre: args.genre,
      directorId: args.directorId,
    });
    return movie.save();
  },
};

export const UPDATE_MOVIE = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    directorId: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    let movie: any = {};
    args.name && (movie.name = args.name);
    args.name && (movie.genre = args.genre);
    args.directorId && (movie.directorId = args.directorId);

    return Movie.findByIdAndUpdate(args.id, movie, { new: true });
  },
};
