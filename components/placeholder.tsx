import { CircleAlert } from "lucide-react"
import Link from "next/link"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { postsPaths } from "@/paths"

import { Button } from "./ui/button"

const Placeholder = ()=> {
    return(
        <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CircleAlert />
        </EmptyMedia>
        <EmptyTitle>Post Not Found</EmptyTitle>
        <EmptyDescription>
          We can&apos;t find the post you&apos;re looking for. It may have been removed or is temporarily unavailable.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button asChild>
            <Link href={postsPaths()}>Go to Posts</Link>
        </Button>
      </EmptyContent>
    </Empty>
    )
}

export {Placeholder}