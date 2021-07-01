import { GraphQLInt, GraphQLString } from "graphql";
import { DirectorModel } from "../../model/director";
import { DirectorType } from "../../type/director";

export const ADD_DIRECTOR = {
  type: DirectorType,
  args: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
  resolve(parent: any, args: any) {
    let director = new DirectorModel({
      name: args.name,
      age: args.age,
    });

    return director.save();
  },
};
