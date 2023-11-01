import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  posts: async (parent, _arg, ctx) => {
    return await ctx.prisma.user
      .findUnique({
        where: { id: parent.id },
      })
      .posts();
  },
};
