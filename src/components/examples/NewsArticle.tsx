"use client";

import { toast } from "sonner";

import Icon from "@/components/common/Icon";
import ExpandingArrowButton from "@/components/common/ExpandingArrowButton";
import { NewsArticleItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/helpers";

export default function NewsArticle({
  data,
  className,
}: {
  data: NewsArticleItem;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2 w-full max-w-md", className)}>
      <span className="text-muted-foreground text-xs mb-2">
        {data.type.toUpperCase()}
      </span>
      <p className="text-3xl font-semibold font-serif">{data.headline}</p>
      <p className="line-clamp-2 font-light text-muted-foreground">
        {data.body}
      </p>
      <div className="flex items-center mt-3 text-xs gap-4 text-muted-foreground">
        <div className="flex items-center gap-2 min-w-max">
          <Icon name="calendar" className="text-inherit h-4" />
          <span>{formatDate(data.date)}</span>
        </div>

        <div className="flex items-center gap-2 min-w-max">
          <Icon name="clock" className="text-inherit h-4" />
          <span>{data.readTime} mins</span>
        </div>

        <div className="self-end w-full flex justify-end">
          <ExpandingArrowButton
            text="Read more"
            onClick={() => toast.warning("Yeah... this doesn't work")}
          />
        </div>
      </div>
    </div>
  );
}
