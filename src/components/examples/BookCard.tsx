"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BookItem } from "@/lib/types";
import Icon from "@/components/common/Icon";
import { cn } from "@/lib/utils";

interface BookCardProps {
  data: BookItem;
  className?: string;
}

export default function BookCard({ data, className }: BookCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const onClick = () => {
    if (!data.description) return;
    setIsOpen(!isOpen);
  };

  return (
    <Card
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      className={cn(
        `w-full max-w-md px-4 py-3 rounded-lg flex flex-col ${
          data.description && "hover:bg-muted cursor-pointer"
        }`,
        className
      )}
    >
      <div className="flex justify-between">
        <span className="font-semibold">{data.title}</span>

        <Tooltip>
          <TooltipTrigger className="h-min">
            <Stars rating={data.rating} hovering={hovering} />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              Rated {data.rating}
              <span className="text-[10px] opacity-70">/5</span>{" "}
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex justify-between pt-1">
        <div className="flex gap-2 items-center">
          <Tooltip>
            <TooltipTrigger className="h-min">
              <Icon
                name={data.isFictional ? "wand" : "glasses"}
                className="w-4 text-muted-foreground"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{data.isFictional ? "Fiction" : "Non-Fiction"}</p>
            </TooltipContent>
          </Tooltip>

          <span className="text-sm text-muted-foreground">{data.author}</span>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5"
        >
          <Tooltip>
            <TooltipTrigger
              className="text-muted-foreground hover:text-primary"
              onClick={() => toast.warning("You thought I'd make this work?")}
            >
              <Icon name="pencil" className="w-4 text-inherit" />{" "}
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit book</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              className="text-muted-foreground hover:text-destructive"
              onClick={() => toast.warning("This ain't functional, buddy")}
            >
              <Icon name="bin" className="w-4 text-inherit" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove book</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 1, marginTop: 8 }}
              animate={{ height: "auto", opacity: 1, marginTop: 8 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ type: "spring", duration: 0.2, bounce: 0.1 }}
            >
              <p className="text-sm text-muted-foreground">
                {data.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}

const Stars = ({ rating, hovering }: { rating: number; hovering: boolean }) => {
  // clamp the rating to be between 0 and 5, and round to the nearest half
  const numberOfStars = Math.min(5, Math.max(0, Math.round(rating * 2) / 2));

  const items = Array.from({ length: 5 });

  return (
    <div className="flex flex-row">
      {items.map((_, index) => {
        let fill = "empty";

        if (index + 1 <= Math.floor(numberOfStars)) {
          fill = "full";
        } else if (index + 0.5 === numberOfStars) {
          fill = "half";
        }

        return (
          <div className="relative" key={index}>
            {fill === "half" && (
              <div
                className={`absolute top-0 right-0 w-[calc(50%-1px)] h-full ${
                  hovering ? "bg-muted/75" : "bg-card/75"
                }  z-10`}
              />
            )}

            <Icon
              key={index}
              name={fill === "half" ? "star-half" : "star"}
              className={`w-4 text-primary ${fill === "empty" && "opacity-25"}`}
            />
          </div>
        );
      })}
    </div>
  );
};
