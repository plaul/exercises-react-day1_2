import { createContext, useState,useContext } from "react";

interface HeaderContextType {
  subTitle: string;
  setSubTitle: (subTitle: string) => void;
}
//export const HeaderContext = createContext({ subTitle: "Please provide a subTitle", setSubTitle: (subTitle: string) => { }});
export const HeaderContext = createContext<HeaderContextType>(null!);

type ThemeProviderProps = {
  children: React.ReactNode;
};
export const HeaderProvider = ({ children }: ThemeProviderProps) => {
  const [subTitle, setSubTitle] = useState("XXX");

  return (
    <HeaderContext.Provider value={{ subTitle, setSubTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export function useHeaderContext() {
  return useContext(HeaderContext);
}