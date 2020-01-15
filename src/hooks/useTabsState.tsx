import { useContext } from "react";
import { TabsStateContext } from "../TabsContext/TabsContext";

export function useTabsState() {
  const context = useContext(TabsStateContext);

  if (context === undefined) {
    console.warn(
      "[TabsContext] - useTabsState must be used within a TabsProvider"
    );
    return null;
  }

  return context;
}
