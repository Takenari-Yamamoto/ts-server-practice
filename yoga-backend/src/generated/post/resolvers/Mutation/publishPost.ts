import type { MutationResolvers } from "./../../../types.generated";
export const publishPost: NonNullable<
  MutationResolvers["publishPost"]
> = async (_parent, _arg, _ctx) => {
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
