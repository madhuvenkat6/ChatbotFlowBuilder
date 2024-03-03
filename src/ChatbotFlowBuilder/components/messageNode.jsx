import React, { useContext } from "react";
import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

import FlowBuilderContext from "../context/context";
import "./messageNode.css";


function MessageNode({ id, data, isConnectable }) {
  const { activeNode } = useContext(FlowBuilderContext);

  return (
    <div
      className="text-updater-node"
      style={{ borderColor: id === activeNode.id ? "blue" : "" }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />

      <div style={{ width: 200, height: "100%" }}>
        <div
          style={{
            height: "35%",
            background: "#b2efe4",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            display: "flex",
            padding: "0 8px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiMessageRoundedDetail style={{ height: 12, width: 12 }} />
            </div>
            <div style={{ fontSize: 10, fontWeight: "bold", marginLeft: 5 }}>
              Send Message
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              width: "12px",
              height: "12px",
              borderRadius: "6px",
            }}
          >
            <RiWhatsappFill style={{ height: 8, width: 8, color: "green" }} />
          </div>
        </div>
        <div
          style={{
            height: "65%",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "5px",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          <div style={{ fontSize: 12 }}>{data.label}</div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default MessageNode;
