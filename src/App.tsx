import "./App.css";

import Header from "./components/Header";
import ScannerPage from "./pages/ScannerPage";

export default function App() {
  return (
    <main className="app">
      <Header
        title="🥬 OpenFresh"
        subtitle="Gestione offline dei contenitori sottovuoto"
      />

      <ScannerPage />
    </main>
  );
}