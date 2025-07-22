import { useState, createContext } from "react";
import type { FormData } from "../src/types.ts";
import type { AppContextType } from "../src/types.ts";
import type { AppProviderProps } from "../src/types.ts";

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: AppProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    searchInput: "",
    searchResults: "",
  });

  const contextValue: AppContextType = {
    formData,
    setFormData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
