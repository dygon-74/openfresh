import Dexie, { type EntityTable } from "dexie";
import type { StoredContainer } from "../models/StoredContainer";

const db = new Dexie("OpenFreshDatabase") as Dexie & {
  containers: EntityTable<StoredContainer, "id">;
};

db.version(1).stores({
  containers: "id, model, food, packedAt, expiresAt",
});

export default db;