import React, { useContext } from "react";
import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

import FlowBuilderContext from "../context/context";
import "./messageNode.scss";

function MessageNode({ id, data, isConnectable }) {
  const { activeNode } = useContext(FlowBuilderContext);

  return (
    <div
      className={`nodetext-updater-div ${id === activeNode.id ? "active" : ""}`}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />

      <div className="main-content-section">
        <div className="top-section">
          <div className="icon-and-text">
            <div className="message-icon">
              <BiMessageRoundedDetail className="message-icon-inner" />
            </div>
            <div className="send-message-text">Send Message</div>
          </div>
          <div className="whatsapp-icon">
            <RiWhatsappFill className="whatsapp-icon-inner" />
          </div>
        </div>
        <div className="bottom-section">
          <div className="label-text">{data.label}</div>
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
