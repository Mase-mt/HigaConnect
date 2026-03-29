import { posts } from "@/data";

import { Post } from "../posts/types";

export const getPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(posts);
  });
};
