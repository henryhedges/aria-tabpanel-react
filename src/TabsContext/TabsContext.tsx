import React, { createContext, useReducer, useEffect } from "react";

import usePreviousValue from "../../../utils/hooks/usePreviousValue";

export interface ITabsContext {
  activeTab?: string | null;
}

export interface IAction extends Partial<ITabsContext> {
  type: any;
}

export interface IReducer {
  (state: ITabsContext, action: IAction): ITabsContext;
}

export interface ITabsContextProps {
  activeTabId?: string;
  initialState?: ITabsContext;
  onChange?: (...args: any[]) => void | null;
  reducer?: IReducer;
}

export const reducer: IReducer = (state, action) => {
  switch (action.type) {
    case "updateActiveTab":
      return {
        ...state,
        activeTab: action.activeTab
      };
    default:
      return state;
  }
};

export const TabsStateContext = createContext<ITabsContext>({
  activeTab: null
});

export const TabsDispatchContext = createContext<React.Dispatch<IAction>>(
  () => ({})
);

const TabsProvider: React.FC<ITabsContextProps> = ({
  activeTabId = null,
  onChange = () => null,
  children
}) => {
  const defaultState: ITabsContext = { activeTab: activeTabId };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const prev = usePreviousValue(state.activeTab);

  useEffect(() => {
    if (state.activeTab !== prev && onChange) {
      onChange(state.activeTab);
    }
  }, [state, onChange, prev]);

  return (
    <TabsStateContext.Provider value={state}>
      <TabsDispatchContext.Provider value={dispatch}>
        {children}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
};

export default TabsProvider;
