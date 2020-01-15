import React, { useRef } from "react";
import { TabWrapper } from "./Tab.styles";
import useTab from "../hooks/useTab";

export interface ITab {
  children?: TTabChildren;
  className?: string;
  e2e: string;
  ref?: React.MutableRefObject<TTabRef>;
  tabId: string;
}

export type TTabRef = HTMLDivElement | null;
export type TTabChildren = (arg: {
  isActive: boolean;
}) => React.ReactNode | React.ReactNode;

const Tab: React.ComponentType<ITab> = React.forwardRef<TTabRef, ITab>(
  ({ children, className, e2e, tabId }, ref) => {
    const {
      ariaControls,
      ariaSelected,
      role,
      tabIndex,
      isActive,
      ...remainingProps
    } = useTab(tabId);

    const tabRef =
      (ref as React.MutableRefObject<TTabRef>) || useRef<TTabRef>(null);

    if (!tabIndex && tabRef.current && tabRef.current.focus) {
      tabRef.current.focus();
    }

    const kids = (function() {
      if (typeof children === "function") {
        return children({ isActive });
      }
      return children;
    })();

    return (
      <TabWrapper
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        className={className}
        data-e2e={`${e2e}Tab${tabId}`}
        ref={tabRef}
        role={role}
        tabIndex={tabIndex}
        {...remainingProps}
      >
        {kids}
      </TabWrapper>
    );
  }
);

export default Tab;
