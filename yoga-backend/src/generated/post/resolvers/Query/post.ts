import type { QueryResolvers } from "./../../../types.generated";
export const post: NonNullable<QueryResolvers["post"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return {
    id: "1",
    title: "Hello World",
    content: "This is a post",
    published: true,
    author: {
      id: "1",
      fullName: "John Doe",
      posts: [],
    },
  };
};
