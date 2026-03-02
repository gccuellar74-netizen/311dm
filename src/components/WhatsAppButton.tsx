"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phone: string; // número en formato internacional sin +
  message?: string;
}

export default function WhatsAppButton({
  phone,
  message = "Hola, quiero más información sobre sus servicios.",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}