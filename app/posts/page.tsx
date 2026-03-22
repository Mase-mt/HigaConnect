import Link from "next/link";

import { posts } from "@/data";
import { postPath } from "@/paths";
const postsPage = () => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${post.status === "DONE" ? "bg-green-500" : "bg-yellow-500"}`}
          >
            {post.status}
          </span>
          <Link href={postPath(post.id)}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default postsPage;
