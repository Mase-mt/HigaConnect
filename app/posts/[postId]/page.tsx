import { Placeholder } from "@/components/placeholder";
import {posts} from "@/data";
import { PostItem } from "@/features/posts/components/post-item";

type TicketTypeProps = {
    params: Promise<{
        postId: string
    }>
}

const postPage = async ({params}: TicketTypeProps) => {
  const {postId} = await params;  
  const post = posts.find((post) => post.id === postId);
  if(!post){
    return <Placeholder/>
  }
  return (
    <div className="flex w-full justify-center animate-fade-in">
        <PostItem post={post} isDetail/>
    </div>
  );
};

export default postPage;
