import React from "react";

export function TabList(props) {
  if (!props.children) return null;

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      onClick: () => props.onActivate(index),
      isActive: index === props.activeIndex
    });
  });

  return <div style={styles}>{children}</div>;
}

const styles = {
  display: "flex",
  borderRadius: 5
};
