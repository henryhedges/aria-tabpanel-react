import { useTabsDispatch } from "./useTabsDispatch";

export interface IUseOnSelectionReturnValue {
  (selection: string): void;
}

export interface IUseOnSelection {
  (): IUseOnSelectionReturnValue;
}

export default function useOnSelection() {
  const dispatch = useTabsDispatch();

  return function onSelection(selection) {
    dispatch({
      type: "updateActiveTab",
      activeTab: selection
    });
  };
}
