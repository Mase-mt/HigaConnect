import { Heading } from "@/components/heading";
import { posts } from "@/data";
import { PostItem } from "@/features/posts/components/post-item";
const postsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Posts" description="Explore posts and memories" />
      <div className="flex flex-1 flex-col gap-y-4 items-center animate-fade-in">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default postsPage;
