import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

type Props = {
  onScan: (text: string) => void;
};

export default function QrScanner({ onScan }: Props) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
        rememberLastUsedCamera: true,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("QR letto:", decodedText);
        onScan(decodedText);
      },
      (errorMessage) => {
        // Ignoriamo gli errori continui di ricerca
        // ma lasciamo un log se un domani servirà fare debug.
        // console.debug(errorMessage);
      }
    );

    return () => {
      scanner
        .clear()
        .catch((err) => console.error("Errore chiusura scanner:", err));
    };
  }, [onScan]);

  return <div id="reader"></div>;
}