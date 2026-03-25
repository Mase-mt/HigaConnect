import Link from "next/link";

import { Heading } from "@/components/heading";
import { postsPaths } from "@/paths";

const homePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home" description="Your home place to start"/>
      <div className="flex-1 flex flex-col items-center">
        <Link href={postsPaths()} className="underline">
          Go to Posts
        </Link>
      </div>
    </div>
  );
};

export default homePage;
