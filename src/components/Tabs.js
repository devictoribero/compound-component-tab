import React from "react";
import { TabList } from "./TabList";
import { TabPanels } from "./TabPanels";

export function Tabs(props) {
  const [activateIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      {React.Children.map(props.children, (child, index) => {
        if (child.type === TabList) {
          return React.cloneElement(child, {
            onActivate: indexToActive => setActiveIndex(indexToActive),
            activeIndex: activateIndex
          });
        }

        if (child.type === TabPanels) {
          return React.cloneElement(child, {
            activeIndex: activateIndex
          });
        }
      })}
    </div>
  );
}
