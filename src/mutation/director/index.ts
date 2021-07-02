import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
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

export const UPDATE_DIRECTOR = {
  type: DirectorType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
  resolve(parent: any, args: any) {
    let updateDirector: any = {};
    args.name && (updateDirector.name = args.name);
    args.age && (updateDirector.age = args.age);

    return DirectorModel.findByIdAndUpdate(args.id, updateDirector, {
      new: true,
    });
  },
};

export const DELETE_DIRECTOR = {
  type: DirectorType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent: any, args: any) {
    return DirectorModel.findByIdAndDelete(args.id);
  },
};
