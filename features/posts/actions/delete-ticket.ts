"use server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { postsPaths } from "@/paths";

export const deletePost = async (id: string) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  redirect(postsPaths())
};
