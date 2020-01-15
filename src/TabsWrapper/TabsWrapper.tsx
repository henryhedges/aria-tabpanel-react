import React from "react";
import TabsProvider, { ITabsContextProps } from "../TabsContext/TabsContext";
import { Wrapper } from "./TabsWrapper.styles";

export interface ITabsWrapper extends ITabsContextProps {
  className?: string;
  e2e: string;
}

const TabsWrapper: React.FC<ITabsWrapper> = ({
  className = "",
  children,
  e2e,
  ...props
}) => {
  return (
    <TabsProvider {...props}>
      <Wrapper className={className} data-e2e={`${e2e}TabsWrapper`}>
        {children}
      </Wrapper>
    </TabsProvider>
  );
};

export default TabsWrapper;
