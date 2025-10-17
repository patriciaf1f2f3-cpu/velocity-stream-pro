import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553599562676"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-scale-in"
    >
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
