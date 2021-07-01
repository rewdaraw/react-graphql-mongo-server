import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { DirectorModel } from "../../model/director";
import { DirectorType } from "../director";

export const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      // MEMO: Relationはここにresolve書く
      resolve(parent: any, args: any) {
        return DirectorModel.findById(parent.directorId);
      },
    },
  }),
});
