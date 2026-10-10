import type { StoredContainer } from "../models/StoredContainer";

type Props = {
  container: StoredContainer;
};

export default function SavedContainerCard({ container }: Props) {
  return (
    <>
      <h3>✅ Contenitore già registrato</h3>

      <p>
        <strong>Contenuto:</strong> {container.food}
      </p>

      <p>
        <strong>Confezionato:</strong> {container.packedAt}
      </p>

      <p>
        <strong>Scadenza:</strong> {container.expiresAt}
      </p>
    </>
  );
}