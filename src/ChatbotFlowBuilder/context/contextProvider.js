import React, { useState } from "react";
import FlowBuilderContext from "./context";

const FlowBuilderProvider = ({ children }) => {
  const [activeNode, setNode] = useState({});
  const setActiveNode = (node) => setNode(node);
  const cleaActiveNode = () => setNode({});

  return (
    <FlowBuilderContext.Provider
      value={{ activeNode, setActiveNode, cleaActiveNode }}
    >
      {children}
    </FlowBuilderContext.Provider>
  );
};

export default FlowBuilderProvider;
