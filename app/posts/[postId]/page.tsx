import {posts} from "@/data";

type TicketTypeProps = {
    params: Promise<{
        postId: string
    }>
}

const postPage = async ({params}: TicketTypeProps) => {
  const {postId} = await params;  
  const post = posts.find((post) => post.id === postId);
  if(!post){
    return<h2>Post not found</h2>
  }
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </div>
  );
};

export default postPage;
