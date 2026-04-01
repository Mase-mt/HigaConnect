import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { postPath } from "@/paths";

import { POST_ICONS } from "../constants";
import { Post } from "../types";

type PostItemProps = {
  post: Post;
  isDetail?: boolean;
};

const PostItem = ({ post, isDetail }: PostItemProps) => {
  const detailButton = (
    <Button variant={"outline"} size={"lg"} asChild>
      <Link href={postPath(post.id)}>
        <LucideSquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[524px]": isDetail,
        "max-w-[520px]": !isDetail,
      })}
    >
      <Card key={post.id} className="w-full">
        <CardHeader>
          <div className="flex flex-1 gap-x-2 font-bold items-center">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <span className="text-sky-900 font-black">{post.name}</span>
              <span className="text-sky-500 font-medium text-sm">
                {"@" + post?.username}
              </span>
            </div>
          </div>
          <Image
            src={post.imageUrl[0]}
            width={500} // Optional for static imports, but recommended
            height={500} // Optional for static imports, but recommended
            alt="Description of my image"
            className="p-y-2 rounded-xl"
          />
          <CardTitle className="flex gap-x-2">
            <span className="truncate text-xl font-bold">{post.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces text-sm", {
              "line-clamp-3": !isDetail,
            })}
          >
            {post.content}
          </span>
        </CardContent>
        <CardFooter>
          {isDetail ? null : (
            <Button asChild variant={"default"}>
              <Link href={postPath(post.id)}>View</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-y-4">
        {isDetail ? null : detailButton}
      </div>
    </div>
  );
};

export { PostItem };
