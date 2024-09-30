import React, { createContext, ReactNode, useContext, useRef } from 'react';

const PrintContext = createContext<{ ref: React.RefObject<HTMLDivElement> | null }>({ ref: null });


interface PrintProviderProps {
  children: ReactNode;
}

export const PrintProvider: React.FC<PrintProviderProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <PrintContext.Provider value={{ ref }}>
      {children}
    </PrintContext.Provider>
  );
};

export const usePrintContext = () => useContext(PrintContext);
