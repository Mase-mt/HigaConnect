import { getPosts } from "@/features/queries/get-posts";

import { PostItem } from "./post-item";

const TicketList = async () => {
  const posts = await getPosts();
  return (
    <div className="flex flex-1 flex-col gap-y-4 items-center animate-fade-in">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export { TicketList };
