export type ContainerType = "plastic" | "glass" | "bag" | "unknown";
export type ContainerSize = "s" | "m" | "l";

export interface Container {
  id: string;
  model: string;
  size: ContainerSize;
  type: ContainerType;
}