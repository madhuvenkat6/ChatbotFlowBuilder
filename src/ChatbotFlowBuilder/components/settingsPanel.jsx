import React, { useContext } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import FlowBuilderContext from "../context/context";

import './settingsPanel.scss'

function SettingsPanel({ switchToNodesPanel }) {
  const { activeNode, setActiveNode, cleaActiveNode } =
    useContext(FlowBuilderContext);

  return (
    <div className="settings-panel-container">
      <div className="header-section">
        <button
          className="back-button"
          onClick={() => {
            cleaActiveNode();
            switchToNodesPanel();
          }}
        >
          <IoArrowBackOutline />
        </button>
        <div className="content-wrapper">
          <div>Message</div>
        </div>
      </div>

      <div className="main-content-section">
        <div className="text-label">Text</div>
        <textarea
          className="textarea-input"
          value={activeNode?.data?.label}
          onChange={(event) => {
            let nodeData = activeNode;
            nodeData.data.label = event.target.value;
            setActiveNode({ ...nodeData });
          }}
        />
      </div>
    </div>
  );
}

export default SettingsPanel;
