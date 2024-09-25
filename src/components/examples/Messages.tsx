"use client";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageItem } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import Icon from "@/components/common/Icon";
import { cn } from "@/lib/utils";

export default function Messages({
  data,
  className,
}: {
  data: MessageItem[];
  className?: string;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  let messages = data;
  if (!isDesktop) {
    messages = messages.slice(0, 3);
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.warning("Uhhh... this doesn't work");
  };

  return (
    <Card
      className={cn(
        "border rounded-lg w-full max-w-lg p-4 flex flex-col gap-4",
        className
      )}
    >
      <div className="flex flex-col gap-2 w-full">
        {messages.map((message, i) => (
          <Message key={i} message={message} />
        ))}
      </div>

      <form onSubmit={onSubmit} className="flex flex-row gap-2 w-full">
        <Input placeholder="Start typing..." />
        <Button variant="default" className="border aspect-square px-0">
          <Icon name="paper-airplane" className="w-4 min-w-4 text-inherit" />
        </Button>
      </form>
    </Card>
  );
}

const Message = ({ message }: { message: MessageItem }) => {
  return (
    <div
      className={`w-full flex ${
        message.sent_by_user ? "justify-end" : "justify-start"
      }`}
    >
      <p
        className={`max-w-[75%] leading-6 ${
          message.sent_by_user
            ? "bg-primary text-primary-foreground"
            : "bg-primary-foreground text-primary"
        } rounded-lg px-4 py-1 border shadow`}
      >
        {message.content}
      </p>
    </div>
  );
};
