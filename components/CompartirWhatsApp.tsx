"use client";

/**
 * En Colombia la información entre comerciantes circula por WhatsApp, no por
 * email. Este botón va en TODAS las páginas y es la principal vía de difusión.
 */
export default function CompartirWhatsApp({ texto }: { texto: string }) {
  function compartir() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const mensaje = encodeURIComponent(`${texto}\n\n${url}`);
    window.open(`https://wa.me/?text=${mensaje}`, "_blank", "noopener");
  }

  return (
    <button
      onClick={compartir}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-4 text-base font-semibold text-black active:opacity-80"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.4 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2m0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.2.3.7 2.6-2.7-.7-.3.2A8.2 8.2 0 1 1 12 3.8" />
      </svg>
      Compartir por WhatsApp
    </button>
  );
}
