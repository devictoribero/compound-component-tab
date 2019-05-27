import React, { Component } from "react";

export function TabPanels({ activeIndex, children }) {
  return <div style={styles}>{children[activeIndex]}</div>;
}

const styles = {
  padding: '20px',
  background: '#f2f2f2'
};
