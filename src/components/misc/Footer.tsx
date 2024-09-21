import Link from "next/link";

import Icon from "@/components/common/Icon";

export default function Footer() {
  return (
    <div className="w-full h-14 border-t px-4 sm:px-8 flex items-center justify-between text-muted-foreground text-sm">
      <span className="">Samwel Zimmer</span>

      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="https://github.com/SamwelZimmer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <Icon name="github" size={24} />
        </Link>

        <Link
          href="https://x.com/samwelzimmer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <Icon name="twitter" size={24} />
        </Link>
      </div>
    </div>
  );
}
