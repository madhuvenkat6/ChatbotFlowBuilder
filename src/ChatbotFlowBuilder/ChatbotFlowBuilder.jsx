import { useCallback, useRef, useState, useContext } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";

import FlowBuilderContext from "./context/context";
import { initialEdges, initialNodes } from "./constants";

import MessageNode from "./components/messageNode";
import NodesPanel from "./components/nodesPanel";
import SettingsPanel from "./components/settingsPanel";

const supportedNodeTypes = { textUpdater: MessageNode };

function ChatbotFlowBuilder() {
  const { setActiveNode } = useContext(FlowBuilderContext);
  const reactFlowWrapper = useRef(null);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isNodePanelActive, setNodePanelActive] = useState(true);

  const yPos = useRef(100);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    yPos.current += 50;
    let newId = Number(nodes[nodes.length - 1].id) + 1;
    const newNode = {
      id: newId.toString(),
      type: "textUpdater",
      position: { x: 0, y: yPos.current },
      data: { label: `text node ${newId}` },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const onNodeClick = (event, node) => {
    setActiveNode(node);
    setNodePanelActive(false);
  };

  const switchToNodesPanel = () => setNodePanelActive(true);

  const showAlert = (success) => {
    const errorElement = document.getElementById("flowInvalid");
    const successElement = document.getElementById("flowValid");

    if (success) {
      successElement.style.display = "flex";
      errorElement.style.display = "none";
      setTimeout(() => {
        successElement.style.display = "none";
      }, 1000);
    } else {
      errorElement.style.display = "flex";
      successElement.style.display = "none";
      setTimeout(() => {
        errorElement.style.display = "none";
      }, 3000);
    }
  };

  const validateTheNodes = () => {
    const nodeIds = nodes.map((n) => n.id);
    // a new Set to store unique 'target' values from the edges array
    let connectedNodes = new Set();
    edges.forEach((e) => connectedNodes.add(e.target));
    // Filtering out nodeIds from the nodeIds array that are not present in the connectedNodes Set
    const abandonedNodeIds = nodeIds.filter((nId) => !connectedNodes.has(nId));
    // if the number of abandoned nodes is less than or equal to 1 to determine the validity of the flow
    const isValidFlow = abandonedNodeIds.length <= 1;
    showAlert(isValidFlow);
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    // check if the dropped element is valid
    if (typeof type === "undefined" || !type) return;
    reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    addNode();
  };

  const headerJSX = (
    <div
      style={{
        height: "5%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0px 30px",
        alignItems: "center",
        background: "#f4f3f2",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          id="flowInvalid"
          style={{
            background: "#fbcccb",
            width: 110,
            fontSize: 12,
            height: 30,
            borderRadius: "5px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          cannot save flow
        </div>
        <div
          id="flowValid"
          style={{
            background: "green",
            width: 110,
            fontSize: 12,
            height: 30,
            borderRadius: "5px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Saved
        </div>
      </div>

      <button
        onClick={() => validateTheNodes()}
        style={{
          background: "white",
          width: 100,
          fontSize: 12,
          height: 30,
          border: "1px solid gray",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Save Changes
      </button>
    </div>
  );

  return (
    <div style={{ height: "100%" }}>
      {headerJSX}
      <div style={{ height: "95%", display: "flex" }}>
        <div
          className="reactflow-wrapper"
          ref={reactFlowWrapper}
          style={{ width: "75%", height: "100%" }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={supportedNodeTypes}
            onNodeClick={onNodeClick}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          />
        </div>
        <div
          style={{ width: "25%", border: "1px solid #eeeeee", height: "100%" }}
        >
          {isNodePanelActive ? (
            <NodesPanel addNode={addNode} />
          ) : (
            <SettingsPanel switchToNodesPanel={switchToNodesPanel} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatbotFlowBuilder;
