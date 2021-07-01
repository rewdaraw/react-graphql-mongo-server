import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_MOVIE_BY_ID } from "../query/movie";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUserById: GET_MOVIE_BY_ID,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
});
