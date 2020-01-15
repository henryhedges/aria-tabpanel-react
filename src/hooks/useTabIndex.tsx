import { useTabsState } from "./useTabsState";

export type TUseTabReturnValue = 0 | -1;

export default function useTabIndex(tabId: string): TUseTabReturnValue {
  const { activeTab } = useTabsState();

  return activeTab === tabId ? 0 : -1;
}
