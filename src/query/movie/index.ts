import { GraphQLID, GraphQLList } from "graphql";
import { MovieType } from "../../type/movie";
import { Movie } from "../../model/movie";

export const GET_MOVIE_BY_ID = {
  type: MovieType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: any) {
    return Movie.findById(args.id);
  },
};

export const GET_ALL_MOVIES = {
  type: new GraphQLList(MovieType),
  resolve(parent: any, args: any) {
    return Movie.find({});
  },
};
