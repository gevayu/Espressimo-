import { MessageCircle, Accessibility } from "lucide-react";

// Shared floating WhatsApp + accessibility buttons (matches ProductPageV2 / CategoryPageV2).
export function FloatingActions() {
  return (
    <>
      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/9720585335035"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צור קשר בוואטסאפ"
        className="fixed bottom-[124px] right-[64px] z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>

      {/* Accessibility — bottom left */}
      <button
        aria-label="הצהרת נגישות"
        className="fixed bottom-[124px] left-[64px] z-50 w-14 h-14 rounded-full bg-[#522c25] flex items-center justify-center shadow-lg hover:bg-[#8B3A00] hover:scale-110 transition-all"
      >
        <Accessibility size={26} className="text-white" />
      </button>
    </>
  );
}
