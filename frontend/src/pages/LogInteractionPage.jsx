import ChatPanel from "../components/ChatPanel";
import InteractionForm from "../components/InteractionForm";
import InteractionHistory from "../components/InteractionHistory";
import "./LogInteractionPage.css";

function LogInteractionPage() {
  return (
    <div className="page">

      <header className="page-header">
        <h1>AI-First CRM</h1>
        <p>Healthcare Professional Interaction Logger</p>
      </header>

      <div className="top-section">

        <div className="left-panel">
          <ChatPanel />
        </div>

        <div className="right-panel">
          <InteractionForm />
        </div>

      </div>

      <div className="bottom-section">
        <InteractionHistory />
      </div>

    </div>
  );
}

export default LogInteractionPage;