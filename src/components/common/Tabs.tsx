"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Tab = {
  label: string;
  name: string;
  icon?: string;
};

interface TabsProps {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (_activeTab: Tab) => void;
  className?: string;
  tabClassName?: string;
  initialSliderStyle?: { left: number; width: number };
}

export default function Tabs({
  tabs,
  activeTab,
  setActiveTab,
  className,
  tabClassName,
  initialSliderStyle,
}: TabsProps) {
  const [sliderStyle, setSliderStyle] = useState(
    initialSliderStyle ?? { left: 0, width: 0 }
  );

  useEffect(() => {
    const tab = document.querySelector(`.tab-${activeTab.name}`);
    const tabsContainer = document.querySelector(".tabs-container");

    if (tab && tabsContainer) {
      const containerRect = tabsContainer.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setSliderStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [activeTab]);

  return (
    <div
      className={cn(
        "relative flex flex-row pb-1 border-b-2 gap-4 tabs-container",
        className
      )}
    >
      <div
        className="absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300"
        style={sliderStyle}
      />

      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          isActive={tab.name === activeTab.name}
          onClick={() => setActiveTab(tab)}
          className={cn(tabClassName, `tab-${tab.name}`)}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
}

interface TabProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

function Tab({ children, isActive, onClick, className }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `transition-all duration-300 ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
}
