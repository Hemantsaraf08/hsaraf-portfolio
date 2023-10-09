import React from "react";
import { cn } from "../lib/utils";

function SectionContainer({
  id,
  bgColor,
  children,
  className =""
}: {
  id?: string;
  bgColor?: string;
  children: any;
  className?: string
}) {
  return (
    <section id={id? id : undefined} className={bgColor ? bgColor : "bg-neutral-700"}>
      <div className={`${cn('flex items-center justify-between container min-h-screen py-[var(--header-ht-desktop)]', className)}`}>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
