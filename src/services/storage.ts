import db from "../database/db";
import type { StoredContainer } from "../models/StoredContainer";

export async function saveContainer(container: StoredContainer) {
  await db.containers.put(container);
}

export async function getContainer(id: string) {
  return await db.containers.get(id);
}

export async function getAllContainers() {
  return await db.containers.toArray();
}

export async function deleteContainer(id: string) {
  return await db.containers.delete(id);
}