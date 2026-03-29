import { Placeholder } from "@/components/placeholder";
import { PostItem } from "@/features/posts/components/post-item";
import { getPostById } from "@/features/queries/get-post";


type TicketTypeProps = {
    params: Promise<{
        postId: string
    }>
}

const postPage = async ({params}: TicketTypeProps) => {
  const {postId} = await params;  
  // const post = posts.find((post) => post.id === postId);
  const post = await getPostById(postId);
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
