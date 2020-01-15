import React from "react";
import { TabPanelWrapper } from "./TabPanel.styles";
import useTabPanel from "../hooks/useTabPanel";

export interface ITabPanel {
  className?: string;
  e2e: string;
  key: string;
  tabId: string;
}

const TabPanel: React.FC<ITabPanel> = ({
  children,
  className = "",
  e2e,
  tabId,
  ...props
}) => {
  const panelProps = useTabPanel(tabId);

  /**
   * There could be possible name conflicts between the attributes from panelProps and ...props.
   * Adding props second allows for override, ...props always wins.
   */

  return (
    <TabPanelWrapper
      className={className}
      data-e2e={`${e2e}TabPanelWrapper`}
      {...panelProps}
      {...props}
    >
      {children}
    </TabPanelWrapper>
  );
};

export default TabPanel;
