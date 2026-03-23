import Link from "next/link";

import { postsPaths } from "@/paths";

const homePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
      <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
      <p className="text-sm text-muted-foreground">
        Explore posts and memories
      </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={postsPaths()} className="underline">
          Go to Posts
        </Link>
      </div>
    </div>
  );
};

export default homePage;
