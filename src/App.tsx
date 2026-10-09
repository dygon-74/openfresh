import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import QrScanner from "./components/QrScanner";

export default function App() {
  const [text, setText] = useState("");

  return (
    <main className="app">
      <Header
        title="🥬 OpenFresh"
        subtitle="Debug Scanner QR"
      />

      <div className="card">
        <h2>Scanner QR</h2>

        <QrScanner onScan={setText} />

        <hr style={{ margin: "20px 0" }} />

        <h3>Testo letto</h3>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            textAlign: "left",
          }}
        >
          {text || "Nessun QR letto"}
        </pre>
      </div>
    </main>
  );
}