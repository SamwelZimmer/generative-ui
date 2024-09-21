"use client";

import Icon from "@/components/common/Icon";
import ExportStyles from "@/components/modals/ExportStyles";

export default function ExportButton() {
  return (
    <ExportStyles>
      <div className="h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80">
        <Icon name="download" />
      </div>
    </ExportStyles>
  );
}
