"use client";
import { Chats } from "@/app/data/Chats";
import { Freelancers } from "@/app/data/Freelancers";
import { Avatar } from "@mui/material";
import { MessagesSquare, Send } from "lucide-react";
import { useState } from "react";

const myId = 0;

export default function ChatPage() {
  const [allChats, setAllChats] = useState(Chats);
  const [input, setInput] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const selectedChat = allChats.find((c) => c.id === selectedChatId);
  const messages = selectedChat?.messages ?? [];
  const getOtherParticipant = (selectedChat: (typeof Chats)[0]) => {
    const otherId = selectedChat?.participants.find((p) => p !== myId);
    return Freelancers.find((f) => f.id === otherId);
  };

  const sendMessage = () => {
    const newMessage = {
      id: messages.length,
      senderId: 0,
      text: input,
      time: new Date().toISOString(),
    };
    setAllChats((prev) =>
      prev.map((c) =>
        c.id === selectedChat?.id
          ? { ...c, messages: [...c.messages, newMessage] }
          : c,
      ),
    );
    setInput("");
  };
  return (
    <div className="flex h-[calc(100vh-5.31rem)] bg-[#f1f1f1]" dir="rtl">
      <div className="w-80 bg-white border-l border-gray-100 flex flex-col shrink-0 shadow-sm">
        <div className="p-5 border-b border-gray-100">
          <p className="font-bold text-gray-800 text-xl">المحادثات</p>
        </div>
        <div className="flex flex-col overflow-y-auto flex-1">
          {allChats.map((chat) => {
            const other = getOtherParticipant(chat);
            return (
              <button
                key={chat.id}
                onClick={() => {
                  setSelectedChatId(chat.id);
                  setInput("");
                }}
                className={`flex items-center gap-3 p-4 hover:bg-gray-50 transition cursor-pointer border-b border-gray-100 text-right w-full ${
                  selectedChatId === chat.id
                    ? "bg-[#f0fafa] border-r-4 border-r-[#1EAAAD]"
                    : ""
                }`}
              >
                <Avatar
                  sx={{ bgcolor: "#1EAAAD", fontWeight: 800, flexShrink: 0 }}
                >
                  {other?.name.charAt(0)}
                </Avatar>
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm truncate">
                    {other?.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {chat.messages[chat.messages.length - 1].text}
                  </p>
                </div>
                <span className="text-xs text-gray-400 shrink-0">
                  {new Date(
                    chat.messages[chat.messages.length - 1].time,
                  ).toLocaleTimeString("ar-EG", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="bg-white p-4 border-b border-gray-100 flex items-center gap-3 shadow-sm">
              <Avatar sx={{ bgcolor: "#1EAAAD", fontWeight: 800 }}>
                {getOtherParticipant(selectedChat)?.name.charAt(0)}
              </Avatar>
              <div>
                <p className="font-bold text-gray-800">
                  {getOtherParticipant(selectedChat)?.name}
                </p>
                <p className="text-xs text-gray-400">
                  {getOtherParticipant(selectedChat)?.job}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderId === myId ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl text-sm flex flex-col gap-1 ${
                      msg.senderId === myId
                        ? "bg-[#1EAAAD] text-white rounded-tl-none"
                        : "bg-white text-gray-800 shadow-sm rounded-tr-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-xs ${msg.senderId === myId ? "text-white/70" : "text-gray-400"}`}
                    >
                      {new Date(msg.time).toLocaleTimeString("ar-EG", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 flex items-center gap-3 shadow-sm">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="اكتب رسالتك..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1EAAAD] transition"
              />
              <button
                onClick={sendMessage}
                className="bg-[#1EAAAD] hover:bg-[#189799] text-white p-2.5 rounded-xl transition cursor-pointer"
              >
                <Send size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-3">
            <MessagesSquare size={120}/>
            <p className="text-lg font-medium py-1">اختر محادثة للبدء</p>
            <p className="text-sm">اضغط على أي محادثة من القائمة</p>
          </div>
        )}
      </div>
    </div>
  );
}
