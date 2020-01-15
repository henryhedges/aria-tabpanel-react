import React from "react";
import { TabListWrapper } from "./TabList.styles";
import useTabList from "../hooks/useTabList";

export interface ITabsList {
  className?: string;
  e2e: string;
}

export default function TabsList({ children, className = "", e2e }) {
  // add listener to check for key press (left / right)
  const { keyPressHandler, role } = useTabList(children);

  return (
    <TabListWrapper
      className={className}
      data-e2e={`${e2e}TabList`}
      onKeyUp={keyPressHandler}
      role={role}
    >
      {children}
    </TabListWrapper>
  );
}
