import { createContext, useState } from "react";

type ContextProps = {
    isNavOpen: boolean
    setIsNavOpen: (value: boolean) => void;
}

export const NavigationContext = createContext<ContextProps>({
    isNavOpen: false,
    setIsNavOpen: () => null
});

export default function NavigationProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <NavigationContext.Provider value={{isNavOpen, setIsNavOpen}}>
            {children}
        </NavigationContext.Provider>
    )
}

