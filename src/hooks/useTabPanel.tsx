import { useTabsState } from "./useTabsState";
import getTabPanelId from "../utils/getTabPanelId";

export interface IUseTabPanelReturnValue {
  "aria-labelledby": string;
  hidden: boolean;
  id: string;
  role: "tabpanel";
}

export default function useTabPanel(tabId: string): IUseTabPanelReturnValue {
  const state = useTabsState();
  const id = getTabPanelId(tabId);

  return {
    "aria-labelledby": tabId,
    hidden: state.activeTab !== tabId,
    id,
    role: "tabpanel"
  };
}
