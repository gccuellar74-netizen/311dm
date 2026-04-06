"use client";

import Image from "next/image";

export default function WhatsAppFloat() {
  const phoneNumber = "12105551234"; // ✅ Cambia por tu número real
  const message = "Hi 311DM! I would like to get more information about your digital marketing services.";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-75 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300">
        <Image
          src="/social/whatsapp.png"
          alt="WhatsApp"
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
    </a>
  );
}