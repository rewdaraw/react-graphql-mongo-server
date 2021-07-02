import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ADD_DIRECTOR, UPDATE_DIRECTOR } from "../mutation/director";
import { ADD_MOVIE, UPDATE_MOVIE } from "../mutation/movie";
import { GET_ALL_DIRECTORS, GET_DIRECTOR_BY_ID } from "../query/director";
import { GET_ALL_MOVIES, GET_MOVIE_BY_ID } from "../query/movie";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getMovieById: GET_MOVIE_BY_ID,
    getAllMovies: GET_ALL_MOVIES,
    getDirectorById: GET_DIRECTOR_BY_ID,
    getAllDirectors: GET_ALL_DIRECTORS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: ADD_MOVIE,
    updateMovie: UPDATE_MOVIE,
    addDirector: ADD_DIRECTOR,
    updateDirector: UPDATE_DIRECTOR,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
