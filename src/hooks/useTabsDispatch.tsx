import { useContext } from "react";
import { TabsDispatchContext } from "../TabsContext/TabsContext";

export function useTabsDispatch() {
  const context = useContext(TabsDispatchContext);

  if (context === undefined) {
    console.warn(
      "[TabsContext] - useTabsDispatch must be used within a TabsProvider"
    );
    return null;
  }

  return context;
}
