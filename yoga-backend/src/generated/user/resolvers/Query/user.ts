import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return {
    id: "1",
    fullName: "John Doe",
    posts: [],
  };
};
