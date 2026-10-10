import type { Container } from "../models/Container";
import { containerModels } from "../data/containers";

type Props = {
  container: Container;
};

export default function ContainerCard({ container }: Props) {
  const model = containerModels[container.model];

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
    </div>
  );
}