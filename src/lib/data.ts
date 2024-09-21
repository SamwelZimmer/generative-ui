import { Styles } from "@/lib/types";

const DEFAULT_STYLES: Styles = {
  "--background": "240 10% 3.9%",
  "--foreground": "0 0% 98%",
  "--card": "240 4% 11%",
  "--card-foreground": "0 0% 98%",
  "--popover": "240 10% 3.9%",
  "--popover-foreground": "0 0% 98%",
  "--primary": "0 0% 98%",
  "--primary-foreground": "240 5.9% 10%",
  "--secondary": "240 3.7% 15.9%",
  "--secondary-foreground": "0 0% 98%",
  "--muted": "240 3.7% 15.9%",
  "--muted-foreground": "240 5% 64.9%",
  "--accent": "240 3.7% 15.9%",
  "--accent-foreground": "0 0% 98%",
  "--destructive": "0 62.8% 30.6%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "240 3.7% 15.9%",
  "--input": "240 3.7% 15.9%",
  "--ring": "240 4.9% 83.9%",
  "--chart-1": "220 70% 50%",
  "--chart-2": "160 60% 45%",
  "--chart-3": "30 80% 55%",
  "--chart-4": "280 65% 60%",
  "--chart-5": "340 75% 55%",
  "--radius": "0.5rem",
  "--warning": "48 96% 89%",
  "--warning-foreground": "38 92% 50%",
};

const BARBIE_STYLES: Styles = {
  "--background": "330 60% 95%", // Light pink background
  "--foreground": "330 100% 10%", // Darker pink for text
  "--card": "340 70% 90%", // Very light pink card background
  "--card-foreground": "330 100% 15%", // Slightly darker pink for card text
  "--popover": "330 60% 95%", // Light pink, matching background
  "--popover-foreground": "330 100% 15%", // Darker pink for popover text
  "--primary": "330 80% 50%", // Vibrant Barbie pink
  "--primary-foreground": "0 0% 100%", // Pure white text on primary
  "--secondary": "340 70% 80%", // Soft pink for secondary elements
  "--secondary-foreground": "330 100% 10%", // Darker pink for text
  "--muted": "340 30% 85%", // Muted light pink
  "--muted-foreground": "330 60% 30%", // More subtle pink for text
  "--accent": "340 80% 70%", // Bright pink accent
  "--accent-foreground": "0 0% 98%", // White foreground on accent
  "--destructive": "0 70% 60%", // Vivid red for destructive actions
  "--destructive-foreground": "0 0% 100%", // Pure white text on destructive
  "--border": "330 40% 80%", // Light pink border
  "--input": "340 50% 95%", // Very light pink for inputs
  "--ring": "330 70% 50%", // Bright pink ring (focus outlines, etc.)
  "--chart-1": "340 80% 60%", // Various pink shades for charts
  "--chart-2": "300 60% 50%", // Deep pinkish-purple
  "--chart-3": "20 80% 65%", // Light peach-pink
  "--chart-4": "350 70% 55%", // Light red-pink
  "--chart-5": "320 90% 50%", // Bright magenta
  "--radius": "1rem", // Slightly more rounded corners
  "--warning": "50 90% 85%", // Soft yellow for warning
  "--warning-foreground": "40 90% 40%", // Darker yellow for warning text
};

const MCDONALDS_STYLES = {
  "--background": "54 100% 50%", // Bright yellow background
  "--foreground": "0 0% 100%", // Pure white for text
  "--card": "0 100% 55%", // McDonald's red for card background
  "--card-foreground": "0 0% 100%", // Pure white for card text
  "--popover": "54 100% 50%", // Matching yellow popover
  "--popover-foreground": "0 0% 100%", // White for popover text
  "--primary": "0 100% 55%", // McDonald's red for primary
  "--primary-foreground": "0 0% 100%", // White text on primary
  "--secondary": "54 100% 50%", // Bright yellow for secondary elements
  "--secondary-foreground": "0 0% 20%", // Dark text for contrast
  "--muted": "54 30% 90%", // Light beige muted color
  "--muted-foreground": "0 0% 10%", // Dark muted foreground
  "--accent": "0 100% 55%", // Red accent
  "--accent-foreground": "0 0% 100%", // White foreground on accent
  "--destructive": "0 100% 50%", // Bright red for destructive actions
  "--destructive-foreground": "0 0% 100%", // Pure white text on destructive
  "--border": "0 100% 55%", // Red border
  "--input": "54 30% 95%", // Light beige input
  "--ring": "0 100% 55%", // Red ring
  "--chart-1": "0 100% 55%", // Red for charts
  "--chart-2": "54 100% 50%", // Yellow for charts
  "--chart-3": "0 0% 20%", // Dark gray for contrast
  "--chart-4": "30 60% 70%", // Soft orange
  "--chart-5": "15 70% 80%", // Light orange
  "--radius": "0.25rem", // Slightly rounded corners
  "--warning": "48 96% 89%", // Light yellow warning
  "--warning-foreground": "38 92% 50%", // Darker yellow warning text
};

const OCEAN_STYLES = {
  "--background": "200 60% 95%", // Light sky blue background
  "--foreground": "220 30% 20%", // Dark navy text
  "--card": "195 50% 85%", // Pale blue card background
  "--card-foreground": "220 30% 15%", // Darker navy for card text
  "--popover": "200 60% 95%", // Light sky blue popover
  "--popover-foreground": "220 30% 20%", // Dark navy text in popover
  "--primary": "190 70% 50%", // Ocean blue primary color
  "--primary-foreground": "0 0% 100%", // Pure white text on primary
  "--secondary": "170 40% 60%", // Soft sea green secondary
  "--secondary-foreground": "0 0% 98%", // White for contrast
  "--muted": "180 20% 90%", // Light aqua muted background
  "--muted-foreground": "210 20% 30%", // Muted gray-blue for text
  "--accent": "200 80% 60%", // Bright blue accent
  "--accent-foreground": "0 0% 100%", // White text on accent
  "--destructive": "10 80% 60%", // Coral red for destructive actions
  "--destructive-foreground": "0 0% 100%", // White text on destructive
  "--border": "190 40% 80%", // Soft blue border
  "--input": "195 50% 95%", // Very light blue for inputs
  "--ring": "200 70% 50%", // Ocean blue ring
  "--chart-1": "190 70% 50%", // Various blue shades for charts
  "--chart-2": "170 40% 60%", // Sea green
  "--chart-3": "200 30% 70%", // Lighter blue
  "--chart-4": "210 60% 40%", // Deeper ocean blue
  "--chart-5": "160 70% 50%", // Aquatic green-blue
  "--radius": "0.5rem", // Slightly rounded corners for a relaxed feel
  "--warning": "50 80% 90%", // Soft yellow for warning
  "--warning-foreground": "40 90% 40%", // Darker yellow for warning text
};

const TECHNO_STYLES = {
  "--background": "240 20% 8%", // Dark blue-gray background
  "--foreground": "180 100% 90%", // Bright cyan text
  "--card": "240 30% 15%", // Darker blue-gray for card
  "--card-foreground": "180 100% 85%", // Light cyan text on card
  "--popover": "240 25% 12%", // Slightly darker for popovers
  "--popover-foreground": "180 100% 90%", // Bright cyan popover text
  "--primary": "260 80% 60%", // Neon purple for primary elements
  "--primary-foreground": "0 0% 100%", // White text on primary
  "--secondary": "180 90% 50%", // Neon cyan for secondary elements
  "--secondary-foreground": "0 0% 10%", // Very dark gray for text
  "--muted": "240 10% 30%", // Muted, dark blue-gray
  "--muted-foreground": "180 80% 70%", // Medium cyan for muted text
  "--accent": "300 80% 70%", // Neon pink accent
  "--accent-foreground": "0 0% 100%", // White text on accent
  "--destructive": "0 80% 50%", // Neon red for destructive actions
  "--destructive-foreground": "0 0% 100%", // White on destructive
  "--border": "240 30% 25%", // Blue-gray border
  "--input": "240 20% 10%", // Dark input background
  "--ring": "180 100% 50%", // Bright cyan ring (focus outlines)
  "--chart-1": "180 100% 60%", // Neon cyan chart color
  "--chart-2": "300 80% 70%", // Neon pink
  "--chart-3": "240 80% 70%", // Bright blue
  "--chart-4": "0 80% 70%", // Bright red
  "--chart-5": "60 80% 60%", // Bright yellow-green
  "--radius": "0.3rem", // Slightly rounded corners
  "--warning": "60 90% 70%", // Bright yellow for warning
  "--warning-foreground": "0 0% 10%", // Dark text on warning
};

const FOREST_STYLES = {
  "--background": "120 20% 10%", // Deep, dark forest green
  "--foreground": "120 25% 95%", // Light cream-colored text
  "--card": "120 20% 15%", // Slightly lighter green for card
  "--card-foreground": "120 20% 90%", // Light greenish-white for card text
  "--popover": "120 20% 12%", // Dark green for popovers
  "--popover-foreground": "120 20% 90%", // Light cream text for popovers
  "--primary": "120 40% 30%", // Medium green for primary elements
  "--primary-foreground": "0 0% 100%", // White text on primary
  "--secondary": "30 30% 50%", // Earthy brown for secondary elements
  "--secondary-foreground": "0 0% 98%", // White text on secondary
  "--muted": "120 10% 25%", // Muted dark green
  "--muted-foreground": "120 15% 80%", // Light greenish text for muted
  "--accent": "90 50% 40%", // Soft moss green for accents
  "--accent-foreground": "0 0% 98%", // White text on accent
  "--destructive": "0 50% 40%", // Deep red for destructive actions
  "--destructive-foreground": "0 0% 98%", // Light text on destructive
  "--border": "120 10% 20%", // Dark green border
  "--input": "120 20% 15%", // Forest green input background
  "--ring": "120 40% 30%", // Medium green ring (focus outlines)
  "--chart-1": "120 40% 40%", // Deep green for charts
  "--chart-2": "30 30% 50%", // Earthy brown
  "--chart-3": "60 40% 50%", // Golden-yellow for chart
  "--chart-4": "90 50% 40%", // Soft moss green
  "--chart-5": "0 50% 40%", // Deep red for chart
  "--radius": "0.4rem", // Slightly rounded corners
  "--warning": "60 80% 70%", // Warm yellow for warning
  "--warning-foreground": "30 40% 20%", // Dark brown text on warning
};

export const STYLE_PRESETS = {
  default: DEFAULT_STYLES,
  barbie: BARBIE_STYLES,
  mcDonalds: MCDONALDS_STYLES,
  ocean: OCEAN_STYLES,
  techno: TECHNO_STYLES,
  forest: FOREST_STYLES,
};
