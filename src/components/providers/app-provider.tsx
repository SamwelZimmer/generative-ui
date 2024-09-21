"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useMounted } from "@/hooks/use-mounted";
import ServerLoadingPage from "@/components/misc/ServerLoadingPage";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { STYLE_PRESETS } from "@/lib/data";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Styles } from "@/lib/types";

interface AppContextProviderProps {
  children: ReactNode;
}

export interface AppContextType {
  styles: Record<string, string>;
  setStyles: (_styles: Styles) => void;
}

// Provide a default context object that matches the type AppContextType
const defaultContextValue: AppContextType = {
  styles: STYLE_PRESETS["default"],
  setStyles: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const mounted = useMounted();

  const [styles, setStyles] = useState(STYLE_PRESETS["default"]);
  const [storedStyles, setStoreStyles] = useLocalStorage<Styles>(
    "styles",
    STYLE_PRESETS["default"]
  );

  // get stored styles from local storage on mount
  useEffect(() => {
    setStyles(storedStyles);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update the style variables when styles are changed
  useEffect(() => {
    // apply styles
    Object.keys(styles).forEach((styleKey) => {
      document.documentElement.style.setProperty(
        styleKey,
        styles[styleKey as keyof typeof styles]
      );
    });

    // add styles to local storage
    setStoreStyles(styles);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styles]);

  const valueObj: AppContextType = {
    styles,
    setStyles,
  };

  if (mounted) {
    return (
      <>
        <TooltipProvider>
          <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>
        </TooltipProvider>

        <Toaster richColors />
      </>
    );
  }

  return <ServerLoadingPage />;
};

export default AppContextProvider;
