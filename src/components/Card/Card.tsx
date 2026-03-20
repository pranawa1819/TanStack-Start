"use client";

import type { ReactNode } from "react";
import { CardContent, Card as Root } from "~/ui/card";

interface CardProps {
  children: ReactNode;
  cardContnetClassName?: string;
  cardClassName?: string;
}

export const HRCard = ({ children, cardContnetClassName, cardClassName }: CardProps) => {
  return (
    <>
    <Root className={`${cardClassName}`}>
      <CardContent className={cardContnetClassName}>{children}</CardContent>
    </Root>
    </>
  );
};
