"use client";

import { CircleAlert, Link } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { home } from "@/paths";

export default function Error({ error }: { error: Error }) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CircleAlert />
        </EmptyMedia>
        <EmptyTitle>{error.message || "Something went wrong"}</EmptyTitle>
        <EmptyDescription>
          Please reload the page or Check your network connection!
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
