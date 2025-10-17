import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553599562676"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-scale-in"
    >
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{
          transform: 'translateZ(0)',
          boxShadow: '0 8px 30px rgba(34, 197, 94, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
        }}
      >
        <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" />
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
