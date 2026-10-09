import "./App.css";
import Header from "./components/Header";
import { parseZwillingQr } from "./utils/parseZwillingQr";

function App() {
  const exampleQr =
    "https://cwa.app.link/food-storage?tc=42BO83&s=l&cc=17F9";

  const container = parseZwillingQr(exampleQr);

  return (
    <main className="app">
      <Header
        title="🥬 OpenFresh"
        subtitle="Gestione offline dei contenitori sottovuoto."
      />

      <div className="card">
        <h2>Parser QR</h2>

        {container ? (
          <>
            <p><strong>ID:</strong> {container.id}</p>
            <p><strong>Modello:</strong> {container.model}</p>
            <p><strong>Tipo:</strong> {container.type}</p>
            <p><strong>Dimensione:</strong> {container.size}</p>
          </>
        ) : (
          <p>QR non valido.</p>
        )}
      </div>

      <footer>Versione 0.1.0-dev</footer>
    </main>
  );
}

export default App;