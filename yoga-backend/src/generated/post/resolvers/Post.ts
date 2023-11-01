import type { PostResolvers } from "./../../types.generated";

export const Post: PostResolvers = {
  author: async (parent, _arg, ctx) => {
    return await ctx.prisma.post
      .findUnique({
        where: { id: parent.id },
      })
      .author();
  },
};
