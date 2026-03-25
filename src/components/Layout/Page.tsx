import type { ReactNode } from "react";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col gap-2 pt-6 ">{children}</div>
  );
};
