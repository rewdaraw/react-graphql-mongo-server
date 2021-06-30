import { GraphQLID } from "graphql";
import { MovieType } from "../../type/movie";

export const GET_MOVIE_BY_ID = {
  type: MovieType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent, args) {
    // await
  },
};
