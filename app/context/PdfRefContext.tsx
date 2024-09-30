import React, { createContext, useContext, useRef } from 'react';

const PrintContext = createContext<{ ref: React.RefObject<HTMLDivElement> | null }>({ ref: null });

export const PrintProvider: React.FC = ({ children }:any) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <PrintContext.Provider value={{ ref }}>
      {children}
    </PrintContext.Provider>
  );
};

export const usePrintContext = () => useContext(PrintContext);
