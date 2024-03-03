import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

import './nodesPanel.scss'

function NodesPanel({ addNode }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="nodes-panel-container">
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "input")}
        className="draggable-node"
      >
        <BiMessageRoundedDetail className="draggable-icon" />
        <div className="draggable-text">Message</div>
      </div>
    </div>
  );
}

export default NodesPanel;
