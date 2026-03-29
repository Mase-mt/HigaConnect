import { posts } from "@/data";

import { Post } from "../posts/types";

export const getPostById = async (postId: string): Promise<Post | null> => {
  return new Promise((resolve) => {
    const post = posts.find((post) => post.id === postId);
    resolve(post || null);
  });
};
