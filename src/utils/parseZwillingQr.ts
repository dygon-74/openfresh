import type {
  Container,
  ContainerSize,
  ContainerType,
} from "../models/Container";

const modelTypes: Record<string, ContainerType> = {
  "42BO83": "glass",
  "42PL24": "plastic",

  // I tuoi modelli
  "12ML74": "glass",
};

export function parseZwillingQr(text: string): Container | null {
  try {
    const url = new URL(text);

    // Verifica che sia un QR Zwilling
    if (url.protocol !== "zwilling:") {
      return null;
    }

    const model = url.searchParams.get("tc");
    const size = url.searchParams.get("s");
    const id = url.searchParams.get("cc");

    if (!model || !size || !id) {
      return null;
    }

    return {
      id,
      model,
      size: size as ContainerSize,
      type: modelTypes[model] ?? "unknown",
    };
  } catch {
    return null;
  }
}