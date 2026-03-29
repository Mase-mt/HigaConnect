import { Suspense } from "react";

import { Heading } from "@/components/heading";
import { SpinnerCustom } from "@/components/spinner";
import { TicketList } from "@/features/posts/components/ticket-list";
const postsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Posts" description="Explore posts and memories" />
      <Suspense fallback={<SpinnerCustom/>}>
        <TicketList/>
      </Suspense>
    </div>
  );
};

export default postsPage;
