import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

function NodesPanel({ addNode }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div style={{ padding: "25px" }}>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "input")}
        style={{
          background: "white",
          border: "1px solid #7a8bee",
          borderRadius: "5px",
          height: 70,
          width: 150,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BiMessageRoundedDetail
          style={{ height: 25, width: 25, color: "#7a8bee" }}
        />
        <div style={{ color: "#7a8bee" }}>Message</div>
      </div>
    </div>
  );
}

export default NodesPanel;
