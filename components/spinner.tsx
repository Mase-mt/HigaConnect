import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SpinnerProps extends React.ComponentProps<"svg"> {
  strokeWidth?: number;
}

function Spinner({ className, strokeWidth = 2, ...props }: SpinnerProps) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-8 animate-spin", className)}
      strokeWidth={strokeWidth} // Explicitly pass as number
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
