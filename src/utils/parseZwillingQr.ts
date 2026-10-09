import type { Container } from "../models/Container";

export function parseZwillingQr(text: string): Container | null {
  try {
    const url = new URL(text);

    const model = url.searchParams.get("tc");
    const size = url.searchParams.get("s");
    const id = url.searchParams.get("cc");

    if (!model || !size || !id) {
      return null;
    }

    return {
      id,
      model,
      size: size as "s" | "m" | "l",
      type: "plastic",
    };
  } catch {
    return null;
  }
}