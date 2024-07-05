import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user-avatar";

const Index = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", content: "Hello!", timestamp: "10:00 AM" },
    { id: 2, sender: "Bot", content: "Hi there! How can I help you?", timestamp: "10:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "User",
          content: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)]">
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start mb-4 ${
              message.sender === "User" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender !== "User" && <UserAvatar className="mr-2" />}
            <div
              className={`rounded-lg p-3 max-w-[70%] ${
                message.sender === "User"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-50 mt-1 block">
                {message.timestamp}
              </span>
            </div>
            {message.sender === "User" && <UserAvatar className="ml-2" />}
          </div>
        ))}
      </ScrollArea>
      <div className="border-t p-4 flex items-center gap-2">
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default Index;