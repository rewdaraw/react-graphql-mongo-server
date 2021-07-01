import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ADD_DIRECTOR } from "../mutation/director";
import { ADD_MOVIE } from "../mutation/movie";
import { GET_DIRECTOR_BY_ID } from "../query/director";
import { GET_MOVIE_BY_ID } from "../query/movie";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getMovieById: GET_MOVIE_BY_ID,
    getDirectorById: GET_DIRECTOR_BY_ID,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: ADD_MOVIE,
    addDirector: ADD_DIRECTOR,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
