import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  serviceUrl?: string; // URL para conectar con el servicio externo
}

export const ChatWindow = ({ isOpen, onClose, serviceUrl }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "¡Hola! Soy el asistente virtual de CIBERBLOG. ¿En qué puedo ayudarte?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simular respuesta (aquí es donde conectarías con el servicio externo)
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "Esta es una respuesta de prueba. Cuando tengas el enlace al servicio externo, podrás conectarlo aquí.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-96 bg-background border border-border rounded-lg shadow-lg flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="p-3 border-b flex justify-between items-center bg-primary text-primary-foreground">
        <h3 className="font-medium">Chat con CIBERBLOG</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          className="flex-1"
        />
        <Button size="icon" onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};