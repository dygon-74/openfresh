import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <main className="app">
      <Header
        title="🥬 OpenFresh"
        subtitle="Gestione offline dei contenitori sottovuoto."
      />

      <div className="card">
        <h2>Benvenuto!</h2>

        <p>
          Questa sarà la nuova applicazione open source compatibile con i
          contenitori ZWILLING Fresh & Save.
        </p>

        <button>📷 Scansiona QR</button>
      </div>

      <footer>Versione 0.1.0-dev</footer>
    </main>
  );
}

export default App;