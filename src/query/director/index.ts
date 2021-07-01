import { GraphQLID } from "graphql";
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
