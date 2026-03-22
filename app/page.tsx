import Link from "next/link";

import { postsPaths } from "@/paths";

const homePage = () => {
  return (
    <div>
      <h2 className="text-lg">Home Page</h2>
      <Link href={postsPaths()} className="underline">
        Go to Posts
      </Link>
    </div>
  );
};

export default homePage;
