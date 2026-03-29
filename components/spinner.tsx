import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SpinnerProps extends Omit<
  React.ComponentProps<"svg">,
  "strokeWidth"
> {
  strokeWidth?: number;
}

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-8 animate-spin", className)}
      {...props}
    />
  );
}
export function SpinnerCustom() {
  return (
    <div className="flex flex-1 items-center gap-4 justify-center self-center">
      <Spinner />
    </div>
  );
}
