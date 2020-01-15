import { Children, useEffect } from "react";
import { useTabsState } from "./useTabsState";
import { useTabsDispatch } from "./useTabsDispatch";

export interface IUseTabListReturnValue {
  keyPressHandler: (e: React.KeyboardEvent) => void;
  role: "tablist";
}

export default function useTabList(
  children: React.ReactElement[]
): IUseTabListReturnValue {
  const { activeTab } = useTabsState();
  const dispatch = useTabsDispatch();

  useEffect(() => {
    if (activeTab === null) {
      dispatch({
        type: "updateActiveTab",
        activeTab: Children.toArray(children)[0].props.tabId
      });
    }
  }, [activeTab, children, dispatch]);

  function findChild(modifier: number) {
    const len = children.length;

    Children.forEach(children, (child, index) => {
      if (activeTab === child.props.tabId) {
        const nextIndex = index + modifier;

        if (nextIndex > -1 && nextIndex < len) {
          dispatch({
            type: "updateActiveTab",
            activeTab: children[nextIndex].props.tabId
          });
        }
      }
    });
  }

  // key press handler:
  // - determine whether or not focus is inside of this component
  // - move focus to the corresponding tab

  function keyPressHandler(e) {
    e.preventDefault();

    const right = "ArrowRight";
    const left = "ArrowLeft";

    switch (e.key) {
      case right:
        findChild(1);
        break;
      case left:
        findChild(-1);
        break;
      default:
        break;
    }
  }

  return {
    keyPressHandler,
    role: "tablist"
  };
}
