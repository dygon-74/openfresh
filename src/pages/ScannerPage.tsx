import { useMemo, useState } from "react";

import QrScanner from "../components/QrScanner";
import ContainerCard from "../components/ContainerCard";

import { parseZwillingQr } from "../utils/parseZwillingQr";

export default function ScannerPage() {
  const [text, setText] = useState("");

  const container = useMemo(() => {
    if (!text) return null;

    return parseZwillingQr(text);
  }, [text]);

  if (container) {
    return <ContainerCard container={container} />;
  }

  return (
    <div className="card">
      <h2>Scanner QR</h2>

      <QrScanner onScan={setText} />
    </div>
  );
}