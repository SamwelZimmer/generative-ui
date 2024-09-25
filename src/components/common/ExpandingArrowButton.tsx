"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "@/components/common/Icon";

interface ExpandingArrowButtonProps {
  text?: string;
  color?: string;
  onClick: () => void;
}

function ExpandingArrowButton({ text, onClick }: ExpandingArrowButtonProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex items-center gap-1.5"
      onClick={onClick}
    >
      {text && <span className={`${hovering && "underline"}`}>{text}</span>}
      <div className="flex items-center relative">
        <div className="overflow-hidden absolute">
          <AnimatePresence>
            {hovering && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                exit={{ width: 0 }}
                transition={{ type: "spring", duration: 0.2, bounce: 0.1 }}
              >
                <div className="w-3 h-px bg-muted-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={{ x: hovering ? 3 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Icon
            name="chevron"
            size={15}
            className="text-muted-foreground -rotate-90"
          />
        </motion.div>
      </div>
    </button>
  );
}

export default ExpandingArrowButton;
