import React, { useContext } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import FlowBuilderContext from "../context/context";

function SettingsPanel({ switchToNodesPanel }) {
  const { activeNode, setActiveNode, cleaActiveNode } =
    useContext(FlowBuilderContext);

  return (
    <div>
      <div
        style={{
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{ border: "0px", background: "white" }}
          onClick={() => {
            cleaActiveNode();
            switchToNodesPanel();
          }}
        >
          <IoArrowBackOutline />
        </button>
        <div style={{ width: "85%" }}>
          <div>Message</div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #eeeeee",
          minHeight: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            textAlign: "left",
            color: "gray",
            marginBottom: "8px",
          }}
        >
          Text
        </div>
        <textarea
          style={{ width: "90%", minHeight: 50, borderColor: "#eeeeee" }}
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
