export type PostStatus = "SUCCESS" | "PENDING" | "FAILED";

export type Post = {
  id: string;
  name: string;
  username: string | null;
  title: string;
  content: string;
  imageUrl: string[];
};
