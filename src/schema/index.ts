import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ADD_MOVIE } from "../mutation/movie";
import { GET_MOVIE_BY_ID } from "../query/movie";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUserById: GET_MOVIE_BY_ID,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: ADD_MOVIE,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
