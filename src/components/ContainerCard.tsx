import { useState } from "react";

import type { Container } from "../models/Container";
import type { StoredContainer } from "../models/StoredContainer";

import { containerModels } from "../data/containers";
import { saveContainer } from "../services/storage";

import FoodForm from "./FoodForm";

type Props = {
  container: Container;
};

export default function ContainerCard({ container }: Props) {
  const model = containerModels[container.model];

  const [saved, setSaved] = useState(false);

  async function handleSave(
    food: string,
    packedAt: string,
    expiresAt: string
  ) {
    const data: StoredContainer = {
      id: container.id,
      model: container.model,
      food,
      packedAt,
      expiresAt,
    };

    try {
      await saveContainer(data);

      console.clear();
      console.log("=== SALVATO ===");
      console.log(data);

      setSaved(true);
    } catch (err) {
      console.error(err);
      alert("Errore durante il salvataggio.");
    }
  }

  return (
    <div className="card">
      <h2>📦 Contenitore riconosciuto</h2>

      <p>
        <strong>Nome:</strong>{" "}
        {model?.name ?? "Modello sconosciuto"}
      </p>

      <p>
        <strong>Codice:</strong> {container.model}
      </p>

      <p>
        <strong>ID:</strong> {container.id}
      </p>

      <p>
        <strong>Tipo:</strong> {container.type}
      </p>

      <p>
        <strong>Dimensione:</strong> {container.size.toUpperCase()}
      </p>

      <hr />

      {saved ? (
        <>
          <h3>✅ Contenitore salvato</h3>
          <p>I dati sono stati memorizzati nel database locale.</p>
        </>
      ) : (
        <FoodForm onSave={handleSave} />
      )}
    </div>
  );
}