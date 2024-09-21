"use client";

import { useMemo, useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import Tabs from "@/components/common/Tabs";
import Icon from "@/components/common/Icon";
import { useAppContext } from "@/components/providers/app-provider";

const MODAL_TITLE = "Export Styles";

export default function ExportStyles({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="">{children}</DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {MODAL_TITLE}
            </DialogTitle>
          </DialogHeader>

          <ModalContent setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="">{children}</DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="text-left mt-4">
          <DrawerTitle className="text-semibold">{MODAL_TITLE}</DrawerTitle>
        </DrawerHeader>

        <ModalContent setOpen={setOpen} isDrawer />
      </DrawerContent>
    </Drawer>
  );
}

const tabs = [
  { label: "CSS", name: "CSS" },
  { label: "JSON", name: "JSON" },
];

const ModalContent = ({
  setOpen,
  isDrawer,
}: {
  setOpen: (_open: boolean) => void;
  isDrawer?: boolean;
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { styles } = useAppContext();

  const jsonString = JSON.stringify(styles, null, 2);
  const cssString = jsonToCssString(styles);

  const content = useMemo(() => {
    switch (activeTab.name) {
      case "JSON":
        return jsonString;
      case "CSS":
        return cssString;
      default:
        return "";
    }
  }, [activeTab, jsonString, cssString]);

  const handleCopy = () => {
    copyToClipboard(content);
  };

  return (
    <div
      className={`flex flex-col w-full ${
        isDrawer ? "p-4" : "max-w-[calc(512px-48px-2px)]"
      } gap-4`}
    >
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        initialSliderStyle={{ left: 0, width: 32.22 }}
      />

      {/* this component need a tiny bit of custom styling so the syntax highlighted text is always visible */}
      <div className="bg-black rounded-md">
        <div className="relative rounded-md w-full overflow-x-scroll h-[30vh] bg-card/50 border shadow-inner">
          <SyntaxHighlighter
            language={activeTab.name.toLowerCase()}
            wrapLongLines={false}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "8px",
              paddingBottom: "32px",
              height: "100%",
              backgroundColor: "transparent",
            }}
          >
            {content}
          </SyntaxHighlighter>
          <div className="absolute flex items-center gap-2 bg-border rounded-tl-md py-1 px-2 bottom-0 right-0">
            <button
              className="text-sm flex gap-2 items-center text-muted-foreground hover:text-text"
              onClick={handleCopy}
            >
              <Icon
                name={isCopied ? "paper-airplane" : "twitter"}
                className="text-inherit"
                size={16}
              />
              <span>Copy</span>
            </button>
          </div>
        </div>
      </div>

      {isDrawer && (
        <Button
          onClick={() => setOpen(false)}
          variant="secondary"
          className="mt-4"
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

/**
 * Converts a JSON style object to a CSS string representation
 * @param styles - JSON object with style variables
 * @param selector - The CSS selector for the styles (default is ":root")
 * @returns CSS string representation
 */
function jsonToCssString(
  styles: Record<string, string>,
  selector = ":root"
): string {
  // Start with the selector
  let cssString = `${selector} {\n`;

  // Iterate over each style property and convert to CSS variable syntax
  for (const [key, value] of Object.entries(styles)) {
    cssString += `  ${key}: ${value};\n`;
  }

  // Close the CSS block
  cssString += `}\n`;

  return cssString;
}
