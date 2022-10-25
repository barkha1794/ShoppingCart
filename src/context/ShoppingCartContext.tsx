import { useContext, createContext, ReactNode } from "react";

const ShoppingCartContext = createContext({});

export const useShoppingContext = () => useContext(ShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
};
export const ShoppingCartProvider = ({
  children
}: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
