import { GraphQLID, GraphQLList } from "graphql";
import { DirectorModel } from "../../model/director";
import { DirectorType } from "../../type/director";

export const GET_DIRECTOR_BY_ID = {
  type: DirectorType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: any) {
    return DirectorModel.findById(args.id);
  },
};

export const GET_ALL_DIRECTORS = {
  type: new GraphQLList(DirectorType),
  resolve(parent: any, args: any) {
    return DirectorModel.find({});
  },
};
