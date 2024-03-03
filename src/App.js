import ChatbotFlowBuilder from "./ChatbotFlowBuilder/ChatbotFlowBuilder";
import FlowBuilderProvider from "./ChatbotFlowBuilder/context/contextProvider";
import "./App.scss";

function App() {
  return (
    <FlowBuilderProvider>
      <div className="App">
        <ChatbotFlowBuilder />
      </div>
    </FlowBuilderProvider>
  );
}

export default App;
