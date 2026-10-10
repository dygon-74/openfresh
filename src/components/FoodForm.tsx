import { useState } from "react";

type Props = {
  onSave: (
    food: string,
    packedAt: string,
    expiresAt: string
  ) => void;
};

export default function FoodForm({ onSave }: Props) {
  const today = new Date().toISOString().substring(0, 10);

  const [food, setFood] = useState("");
  const [packedAt, setPackedAt] = useState(today);
  const [expiresAt, setExpiresAt] = useState(today);

  return (
    <>
      <h3>Contenuto</h3>

      <input
        placeholder="Es. Lasagne"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <br />
      <br />

      <label>Confezionato il</label>

      <br />

      <input
        type="date"
        value={packedAt}
        onChange={(e) => setPackedAt(e.target.value)}
      />

      <br />
      <br />

      <label>Scadenza</label>

      <br />

      <input
        type="date"
        value={expiresAt}
        onChange={(e) => setExpiresAt(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={() =>
          onSave(food, packedAt, expiresAt)
        }
      >
        Salva
      </button>
    </>
  );
}