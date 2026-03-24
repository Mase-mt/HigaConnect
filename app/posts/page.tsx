import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/data";
import { postPath } from "@/paths";
const postsPage = () => {
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-green-500"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Pending = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Failed = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-red-500"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const POST_ICONS = {
    PENDING: <Pending />,
    SUCCESS: <CheckIcon/>,
    FAILED: <Failed />,
  };
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
        <span className="text-sm text-muted-foreground">
          Explore posts and memories
        </span>
      </div>
      <Separator />
      <div className="flex flex-1 flex-col gap-y-4 items-center animate-fade-in">
        {posts.map((post) => (
          <Card key={post.id} className="w-full max-w-[420px]">
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
                    {"@" + post.username}
                  </span>
                </div>
                <span>{POST_ICONS[post.status]}</span>
              </div>
              <CardTitle className="flex gap-x-2">
                <Image
                  src="/Moj2.jpg"
                  width={500} // Optional for static imports, but recommended
                  height={500} // Optional for static imports, but recommended
                  alt="Description of my image"
                  className="p-y-2 rounded-xl"
                />
                <span className="truncate text-xl font-bold">{post.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces text-sm">
                {post.content}
              </span>
            </CardContent>
            <CardFooter>
              <Button asChild variant={"default"}>
                <Link href={postPath(post.id)}>View</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default postsPage;
