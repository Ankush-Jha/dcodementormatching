"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, Smile } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  sender: "user" | "mentor"
  content: string
  timestamp: string
}

interface MessagingPanelProps {
  mentor: {
    name: string
    avatar: string
    title: string
  }
}

export function MessagingPanel({ mentor }: MessagingPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "mentor",
      content: "Hi Alex! Great work on your last PR. I reviewed your code and left some feedback.",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      sender: "user",
      content: "Thanks Sarah! I'll take a look at your comments and make the changes.",
      timestamp: "10:35 AM",
    },
    {
      id: "3",
      sender: "mentor",
      content:
        "Perfect! Also, I found a great issue for you to work on next. It involves implementing a new feature with React hooks. Want to give it a try?",
      timestamp: "10:40 AM",
    },
    {
      id: "4",
      sender: "user",
      content: "That sounds like a great learning opportunity. Can you send me the link?",
      timestamp: "10:42 AM",
    },
    {
      id: "5",
      sender: "mentor",
      content:
        "Here you go: github.com/project/issues/123. Let me know if you have any questions. We can discuss it in our next session.",
      timestamp: "10:45 AM",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  return (
    <Card className="bg-card border-border overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-border bg-card/50">
        <div className="flex items-center gap-3">
          <Image
            src={mentor.avatar || "/placeholder.svg"}
            alt={mentor.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold text-foreground">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground">{mentor.title}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-[500px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-card/50">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-background border-border text-foreground"
          />
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Smile className="w-5 h-5" />
          </Button>
          <Button onClick={handleSend} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
