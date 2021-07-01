import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Movie } from "../../model/movie";
import { MovieType } from "../movie";

export const DirectorType: any = new GraphQLObjectType({
  name: "Director",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      // MEMO: Relationはここにresolve書く
      resolve(parent: any, args: any) {
        return Movie.find({ directorId: parent.id });
      },
    },
  },
});
