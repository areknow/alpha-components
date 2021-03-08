import React, { createContext, useState } from 'react';

export const DEFAULT_STATE: ContextModel = {
  scrollNav: false,
};

export interface ContextModel {
  scrollNav: boolean;
}

type ContextType = {
  context: ContextModel;
  updateContext: (updateData: Partial<ContextModel>) => void;
};

export const Context = createContext<ContextType>({
  context: DEFAULT_STATE,
  updateContext: () => null,
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<ContextModel>(DEFAULT_STATE);

  function updateContext(updateData: Partial<ContextModel>) {
    setContext((context) => {
      return { ...context, ...updateData };
    });
  }

  return (
    <Context.Provider value={{ context, updateContext }}>
      {children}
    </Context.Provider>
  );
};
