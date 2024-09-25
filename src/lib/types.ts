import { STYLE_PRESETS } from "@/lib/data";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export type StylePresets = keyof typeof STYLE_PRESETS;

export type Styles = {
  "--background": string;
  "--foreground": string;
  "--card": string;
  "--card-foreground": string;
  "--popover": string;
  "--popover-foreground": string;
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;
  "--muted": string;
  "--muted-foreground": string;
  "--accent": string;
  "--accent-foreground": string;
  "--destructive": string;
  "--destructive-foreground": string;
  "--border": string;
  "--input": string;
  "--ring": string;
  "--chart-1": string;
  "--chart-2": string;
  "--chart-3": string;
  "--chart-4": string;
  "--chart-5": string;
  "--radius": string; // Specifically for the "rem" value
  "--warning": string;
  "--warning-foreground": string;
};

// example components
export type BookItem = {
  title: string;
  description?: string;
  author: string;
  yearPublished?: number;
  isFictional: boolean;
  rating: number;
};

export type MessageItem = {
  sent_by_user: boolean;
  content: string;
};

export type NewsArticleItem = {
  type: string; // e.g. politics, sports, tech
  date: string;
  headline: string;
  body: string;
  author: string;
  readTime: number;
};

export type TestimonialItem = {
  name: string;
  username: string;
  social: string;
  text: string;
  img: string;
};
