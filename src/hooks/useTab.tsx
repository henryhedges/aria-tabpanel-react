import getTabPanelId from "../utils/getTabPanelId";
import useOnSelection, { IUseOnSelection } from "../hooks/useOnSelection";
import useTabIndex from "../hooks/useTabIndex";

export interface IUseTabReturnValue {
  ariaControls: string;
  ariaSelected: boolean;
  id: string;
  isActive: boolean;
  onClick: IUseOnSelection;
  role: "tab";
  tabIndex: 0 | -1;
}

export default function useTab(tabId: string): IUseTabReturnValue {
  const tabIndex = useTabIndex(tabId);
  const onSelection = useOnSelection();
  const tabPanelId = getTabPanelId(tabId);

  return {
    ariaControls: tabPanelId,
    ariaSelected: !tabIndex,
    id: tabId,
    isActive: tabIndex === 0,
    onClick: onSelection.bind(null, tabId),
    role: "tab",
    tabIndex: tabIndex
  };
}
