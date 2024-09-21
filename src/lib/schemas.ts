import { z } from "zod";
import { Styles } from "./types";

// define regex for HSL and rem values
const hslRegex = /^\d{1,3}\s\d{1,3}%\s\d{1,3}(\.\d+)?%$/;
const remRegex = /^\d+(\.\d+)?rem$/;

// Create a mapping of keys to the Zod schema based on the type definition
export const styleSchema = z.object(
  Object.fromEntries(
    Object.keys({
      "--background": "",
      "--foreground": "",
      "--card": "",
      "--card-foreground": "",
      "--popover": "",
      "--popover-foreground": "",
      "--primary": "",
      "--primary-foreground": "",
      "--secondary": "",
      "--secondary-foreground": "",
      "--muted": "",
      "--muted-foreground": "",
      "--accent": "",
      "--accent-foreground": "",
      "--destructive": "",
      "--destructive-foreground": "",
      "--border": "",
      "--input": "",
      "--ring": "",
      "--chart-1": "",
      "--chart-2": "",
      "--chart-3": "",
      "--chart-4": "",
      "--chart-5": "",
      "--radius": "",
      "--warning": "",
      "--warning-foreground": "",
    } as Styles).map((key) => {
      if (key === "--radius") {
        return [key, z.string().regex(remRegex)];
      }
      return [key, z.string().regex(hslRegex)];
    })
  )
);
