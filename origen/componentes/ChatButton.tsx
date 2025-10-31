import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatWindow } from "./ChatWindow";

export const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg shadow-primary/30 bg-primary hover:bg-primary/90 animate-glow-pulse"
        aria-label="Abrir chat"
        onClick={toggleChat}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      <ChatWindow 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        serviceUrl="" // Aquí podrás añadir la URL del servicio externo
      />
    </>
  );
};
