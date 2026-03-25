import { Kanban } from "lucide-react";
import Link from "next/link";

import { home, postsPaths } from "@/paths";

import { Button } from "./ui/button";


const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/50 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div>
        <Button asChild variant={"ghost"}>
          <Link href={home()}>
            <Kanban size={64} color="#03EF62" strokeWidth={3} className="size-6"/>
            <h1 className="text-lg font-semibold ml-2">HigaConnect</h1>
          </Link>
        </Button>
      </div>
      <div>
        <Button asChild variant={"default"}>
          <Link href={postsPaths()}>
            <h2 className="text-sm font-semibold">Posts</h2>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export {Header}