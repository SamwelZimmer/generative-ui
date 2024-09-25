"use client";

import { useState } from "react";
import { toast } from "sonner";

import Icon from "@/components/common/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { STYLE_PRESETS } from "@/lib/data";
import { StylePresets } from "@/lib/types";
import { useAppContext } from "@/components/providers/app-provider";
import { generateTheme } from "@/lib/queries";

export default function GenerationForm() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      // do ai logic
      const res = generateTheme(prompt);
      console.log(res);

      toast.success("Generation successful");
    } catch (err) {
      console.error(err);
      toast.error("Ahhh... something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm flex items-center gap-2 px-6 sm:px-0"
      >
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-card"
          placeholder="e.g. a barbie theme..."
        />

        <Button
          type="submit"
          disabled={isLoading || prompt.length <= 0}
          className="font-semibold aspect-square px-0"
        >
          {isLoading ? (
            <Icon
              name="spinner"
              className="text-inherit animate-spin ease-in-out duration-1000"
            />
          ) : (
            <Icon name="paper-airplane" className="text-inherit w-max" />
          )}
        </Button>
      </form>

      <div className="flex gap-2 w-[calc(100%+16px)] max-w-sm mx-auto -ml-2 px-6 sm:px-4">
        <div className="relative overflow-hidden">
          <div className="absolute left-0  h-full w-2 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 h-full w-2 bg-gradient-to-l from-background to-transparent" />
          <div className="flex items-center w-full gap-2 overflow-scroll hidden-scrollbar pl-2 pr-2">
            {Object.keys(STYLE_PRESETS).map((style, i) => (
              <PresetStyleChip key={i} style={style as StylePresets} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PresetStyleChipProps {
  style: StylePresets;
}

const PresetStyleChip = ({ style }: PresetStyleChipProps) => {
  const { setStyles } = useAppContext();

  const handleClick = () => {
    setStyles(STYLE_PRESETS[style]);
  };

  return (
    <Button
      onClick={handleClick}
      variant="secondary"
      className="text-xs h-6 capitalize border"
    >
      {style}
    </Button>
  );
};
