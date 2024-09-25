"use client";

import { cn } from "@/lib/utils";
import React, { useRef, MouseEvent } from "react";

export default function DraggableContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let isDown = false;
  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let scrollTop = 0;

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    isDown = true;
    if (!containerRef.current) return;
    containerRef.current.classList.add("active");
    startX = e.pageX - containerRef.current.offsetLeft;
    startY = e.pageY - containerRef.current.offsetTop;
    scrollLeft = containerRef.current.scrollLeft;
    scrollTop = containerRef.current.scrollTop;
  };

  const onMouseLeave = () => {
    isDown = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("active");
    }
  };

  const onMouseUp = () => {
    isDown = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("active");
    }
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-full overflow-auto cursor-grab active:cursor-grabbing",
        className
      )}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}
