import { prisma } from "@/lib/prisma";

export const getPostById = async (postId: string) => {
  return prisma.post.findUnique({
    where: {
      id: postId
    }
  });
};
