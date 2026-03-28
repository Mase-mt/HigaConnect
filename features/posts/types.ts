export type PostStatus = "SUCCESS" | "PENDING" | "FAILED";

export type Post = {
  id: string;
  name: string;
  username: string;
  title: string;
  content: string;
  status: PostStatus;
};
