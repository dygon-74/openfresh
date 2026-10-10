import type { Container } from "../models/Container";
import { containerModels } from "../data/containers";

export function parseZwillingQr(text: string): Container | null {
  try {
    const url = new URL(text);

    // Verifica che sia un QR Zwilling
    if (url.protocol !== "zwilling:") {
      return null;
    }

    const modelCode = url.searchParams.get("tc");
    const uniqueId = url.searchParams.get("cc");

    if (!modelCode || !uniqueId) {
      return null;
    }

    const model = containerModels[modelCode];

    if (!model) {
      return {
        id: uniqueId,
        model: modelCode,
        type: "unknown",
        size: "m",
      };
    }

    return {
      id: uniqueId,
      model: model.code,
      type: model.type,
      size: model.size,
    };
  } catch {
    return null;
  }
}