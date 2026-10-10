import type { ContainerType, ContainerSize } from "../models/Container";

export interface ContainerModel {
  code: string;
  name: string;
  type: ContainerType;
  size: ContainerSize;
}

export const containerModels: Record<string, ContainerModel> = {
  "12ML74": {
    code: "12ML74",
    name: "Ciotola in vetro grande",
    type: "glass",
    size: "l",
  },

  // Modelli che aggiungeremo man mano
  "42BO83": {
    code: "42BO83",
    name: "Contenitore in vetro",
    type: "glass",
    size: "m",
  },

  "42PL24": {
    code: "42PL24",
    name: "Contenitore in plastica",
    type: "plastic",
    size: "m",
  },
};